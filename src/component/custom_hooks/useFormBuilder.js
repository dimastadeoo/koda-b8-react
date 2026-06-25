import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Fungsi untuk membuat skema Zod dari konfigurasi field
const buildSchema = (fields) => {
  const shape = {};
  fields.forEach((field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'password': {
        let validator = z.string();
        if (field.required) validator = validator.min(1, `${field.label} wajib diisi`);
        if (field.type === 'email') validator = validator.email('Email tidak valid');
        if (field.minLength) validator = validator.min(field.minLength, `Minimal ${field.minLength} karakter`);
        if (field.maxLength) validator = validator.max(field.maxLength, `Maksimal ${field.maxLength} karakter`);
        shape[field.name] = validator;
        break;
      }
      case 'number': {
        let validator = z.number({ invalid_type_error: 'Harus berupa angka' });
        if (field.required) validator = validator.min(1, 'Harus diisi');
        if (field.min !== undefined) validator = validator.min(field.min, `Minimal ${field.min}`);
        if (field.max !== undefined) validator = validator.max(field.max, `Maksimal ${field.max}`);
        shape[field.name] = validator;
        break;
      }
      case 'radio': {
        const enumValues = field.options.map(o => o.value);
        let validator = z.enum(enumValues, { required_error: 'Pilih salah satu' });
        if (!field.required) validator = validator.optional();
        shape[field.name] = validator;
        break;
      }
      case 'checkbox': {
        if (field.options && Array.isArray(field.options)) {
          // checkbox group
          let validator = z.array(z.string()).optional();
          if (field.required) validator = validator.min(1, 'Pilih minimal satu');
          shape[field.name] = validator;
        } else {
          // single checkbox
          let validator = z.boolean();
          if (field.required) validator = validator.refine(val => val === true, 'Harus dicentang');
          shape[field.name] = validator;
        }
        break;
      }
      case 'textarea': {
        let validator = z.string();
        if (field.required) validator = validator.min(1, 'Wajib diisi');
        if (field.maxLength) validator = validator.max(field.maxLength, `Maksimal ${field.maxLength} karakter`);
        shape[field.name] = validator;
        break;
      }
      case 'file': {
        // Untuk file, validasi sederhana: required (boleh pakai z.instanceof)
        let validator = z.any();
        if (field.required) validator = validator.refine(val => val && val.length > 0, 'File harus diupload');
        shape[field.name] = validator;
        break;
      }
      default: {
        // fallback
        shape[field.name] = z.any().optional();
      }
    }
  });
  return z.object(shape);
};

// Fungsi untuk membuat default values dari konfigurasi
const buildDefaultValues = (fields) => {
  const defaults = {};
  fields.forEach((field) => {
    if (field.type === 'checkbox' && field.options && Array.isArray(field.options)) {
      defaults[field.name] = [];
    } else if (field.type === 'checkbox') {
      defaults[field.name] = false;
    } else if (field.type === 'radio') {
      defaults[field.name] = '';
    } else if (field.type === 'number') {
      defaults[field.name] = '';
    } else if (field.type === 'file') {
      defaults[field.name] = null;
    } else {
      defaults[field.name] = '';
    }
  });
  return defaults;
};

// Custom hook utama
export const useFormBuilder = (fields, options = {}) => {
  const {
    mode = 'onSubmit',
    defaultValues: customDefaultValues = {},
    onSubmit,
    ...restOptions
  } = options;

  const schema = buildSchema(fields);
  const defaultValues = {
    ...buildDefaultValues(fields),
    ...customDefaultValues,
  };

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode,
    ...restOptions,
  });

  // Jika onSubmit diberikan, buat handler submit yang sudah terikat
  const submit = onSubmit ? methods.handleSubmit(onSubmit) : null;

  return {
    ...methods,
    submit, // langsung pakai di form onSubmit={submit}
    fields, // opsional: akses ke konfigurasi field
  };
};