import { useState } from 'react';
import { useController } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormInput = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  options = [],
  required = false,
  disabled = false,
  className = '',
  leftIcon = null,
  togglePassword = true,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  const [showPassword, setShowPassword] = useState(false);
  const actualType = type === 'password' && showPassword ? 'text' : type;

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            {...field}
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            className={`w-full py-2.5 px-3.5 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white ${
              error ? 'border-red-500' : ''
            } ${className}`}
            rows={rest.rows || 3}
          />
        );

      case 'select':
        return (
          <select
            {...field}
            id={name}
            disabled={disabled}
            className={`w-full py-2.5 px-3.5 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white ${
              error ? 'border-red-500' : ''
            } ${className}`}
          >
            <option value="">Pilih...</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );

      case 'radio':
        return (
          <div className="flex flex-wrap gap-4">
            {options.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  {...field}
                  value={opt.value}
                  checked={field.value === opt.value}
                  disabled={disabled}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                {opt.label}
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        if (Array.isArray(field.value)) {
          return (
            <div className="flex flex-wrap gap-4">
              {options.map((opt) => (
                <label key={opt.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={opt.value}
                    checked={field.value.includes(opt.value)}
                    onChange={(e) => {
                      const val = e.target.value;
                      const newValue = e.target.checked
                        ? [...field.value, val]
                        : field.value.filter((v) => v !== val);
                      field.onChange(newValue);
                    }}
                    disabled={disabled}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          );
        } else {
          return (
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={!!field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                disabled={disabled}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              {label}
            </label>
          );
        }

      case 'file':
        return (
          <input
            type="file"
            id={name}
            onChange={(e) => field.onChange(e.target.files)}
            disabled={disabled}
            className={`w-full py-2.5 px-3.5 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white ${
              error ? 'border-red-500' : ''
            } ${className}`}
            {...rest}
          />
        );

      default:
        return (
          <div className="relative">
            {leftIcon && (
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]">
                {leftIcon}
              </span>
            )}
            <input
              {...field}
              type={actualType}
              id={name}
              placeholder={placeholder}
              disabled={disabled}
              className={`w-full py-2.5 ${
                leftIcon ? 'pl-10' : 'pl-3.5'
              } pr-3.5 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white ${
                error ? 'border-red-500' : ''
              } ${className}`}
              {...rest}
            />
            {type === 'password' && togglePassword && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C8C8C] hover:text-[#111827] cursor-pointer"
              >
                {showPassword ? <FaEyeSlash className="w-3.5 h-3.5" /> : <FaEye className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        );
    }
  };

  // Single checkbox tidak perlu label terpisah
  if (type === 'checkbox' && !Array.isArray(field.value)) {
    return (
      <div className="mb-2">
        {renderInput()}
        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
      </div>
    );
  }

  return (
    <>
      {label && type !== 'checkbox' && (
        <label htmlFor={name} className="text-xs font-medium text-[#111827] block mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {renderInput()}
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </>
  );
};

export default FormInput;