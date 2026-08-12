import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AddUserModal({ isOpen, onClose, onSave, roles, loading }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    hp_number: '',
    roleName: 'customer',
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email wajib diisi';
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
    }
    if (!formData.name) newErrors.name = 'Nama wajib diisi';
    if (!formData.roleName) newErrors.roleName = 'Role wajib dipilih';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const result = await onSave(formData);
    if (result.success) {
      setFormData({ email: '', password: '', name: '', hp_number: '', roleName: 'customer' });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#111827]">Tambah User Baru</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Nama Lengkap *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              className={`w-full mt-1 p-3 border rounded-xl text-sm outline-none focus:border-green-500 ${
                errors.name ? 'border-red-500' : 'border-[#e2e8f0]'
              }`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@contoh.com"
              className={`w-full mt-1 p-3 border rounded-xl text-sm outline-none focus:border-green-500 ${
                errors.email ? 'border-red-500' : 'border-[#e2e8f0]'
              }`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Minimal 6 karakter"
              className={`w-full mt-1 p-3 border rounded-xl text-sm outline-none focus:border-green-500 ${
                errors.password ? 'border-red-500' : 'border-[#e2e8f0]'
              }`}
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Nomor HP</label>
            <input
              type="tel"
              name="hp_number"
              value={formData.hp_number}
              onChange={handleChange}
              placeholder="081234567890"
              className="w-full mt-1 p-3 border border-[#e2e8f0] rounded-xl text-sm outline-none focus:border-green-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Role *</label>
            <select
              name="roleName"
              value={formData.roleName}
              onChange={handleChange}
              className={`w-full mt-1 p-3 border rounded-xl text-sm outline-none focus:border-green-500 bg-white ${
                errors.roleName ? 'border-red-500' : 'border-[#e2e8f0]'
              }`}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.name}>
                  {role.name.charAt(0).toUpperCase() + role.name.slice(1)}
                </option>
              ))}
            </select>
            {errors.roleName && <p className="text-xs text-red-500 mt-1">{errors.roleName}</p>}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-[#e2e8f0] text-[#6B7280] hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Menyimpan...' : 'Simpan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}