import { useState } from "react";
import AsideContent from "../Aside";
import NavPage from "../NavPage";
import {
  FaUsers,
  FaUserPlus,
  FaBox,
  FaStar,
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
  FaPlus,
} from "react-icons/fa";
import { useAdmin } from "../custom_hooks/useUserAdmin.js";
import AddUserModal from "./AddUserModal.jsx";
import { makeModal } from "../ModalContext";
import { format } from "date-fns";

// Helper functions
const getInitials = (name) => {
  if (!name) return "U";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

const formatDate = (dateStr) => {
  if (!dateStr) return "-";
  try {
    return format(new Date(dateStr), "dd MMM yyyy");
  } catch {
    return dateStr;
  }
};

const getRoleColor = (role) => {
  switch (role) {
    case "admin":
      return "bg-purple-100 text-purple-700";
    case "staff":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-green-100 text-green-700";
  }
};

function TierBadge({ role }) {
  const color = getRoleColor(role);
  return (
    <div className={`flex w-fit items-center justify-center rounded-xl px-2 py-0.5 text-xs font-normal ${color}`}>
      {role || "customer"}
    </div>
  );
}

function ActionButtons({ userId, onView, onDelete }) {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#1A73E8]"
        aria-label="Lihat pelanggan"
        onClick={() => onView(userId)}
      >
        <FaEye size={16} />
      </button>
      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#1A73E8]"
        aria-label="Edit pelanggan"
        onClick={() => onView(userId)}
      >
        <FaEdit size={16} />
      </button>
      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#DC2626]"
        aria-label="Hapus pelanggan"
        onClick={() => onDelete(userId)}
      >
        <FaTrash size={16} />
      </button>
    </div>
  );
}

function CustomerRow({ user, onView, onDelete }) {
  return (
    <tr className="border-b border-black/10 last:border-b-0">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[#e9f2ff] text-sm font-normal text-[#1A73E8]">
            {getInitials(user.name)}
          </div>
          <div className="grid">
            <h2 className="text-sm font-normal text-[#111827]">{user.name || "Unknown"}</h2>
            <p className="text-xs font-normal text-[#99A1AF]">{user.email}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <p className="text-xs font-normal text-[#99A1AF]">
          {user.hp_number || "-"}
        </p>
      </td>
      <td className="px-4 py-3">
        <p className="text-xs font-normal text-[#99A1AF]">
          {formatDate(user.created_at)}
        </p>
      </td>
      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#111827]">-</h3>
      </td>
      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#1A73E8]">-</h3>
      </td>
      <td className="px-4 py-3">
        <TierBadge role={user.role_name} />
      </td>
      <td className="px-4 py-3">
        <ActionButtons userId={user.id} onView={onView} onDelete={onDelete} />
      </td>
    </tr>
  );
}

export default function CustomerList() {
  const { users, roles, usersLoading, addUser, removeUser } = useAdmin();
  const { showConfirm, showAlert } = makeModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter users by search
  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();
    return (
      (user.name?.toLowerCase() || "").includes(search) ||
      (user.email?.toLowerCase() || "").includes(search) ||
      (user.hp_number || "").includes(search)
    );
  });

  // Stats
  const totalUsers = users.length;
  const adminCount = users.filter((u) => u.role_name === "admin").length;
  const staffCount = users.filter((u) => u.role_name === "staff").length;
  const customerCount = users.filter((u) => u.role_name === "customer").length;

  const customerStats = [
    {
      value: totalUsers,
      label: "Total Pengguna",
      iconBg: "bg-[#F0FDF4]",
      iconColor: "text-[#16A34A]",
      icon: <FaUsers size={18} />,
    },
    {
      value: customerCount,
      label: "Pelanggan",
      iconBg: "bg-[#EFF6FF]",
      iconColor: "text-[#1A73E8]",
      icon: <FaUserPlus size={18} />,
    },
    {
      value: adminCount,
      label: "Admin",
      iconBg: "bg-[#FAF5FF]",
      iconColor: "text-[#8B5CF6]",
      icon: <FaBox size={18} />,
    },
    {
      value: staffCount,
      label: "Staff",
      iconBg: "bg-[#FFF7ED]",
      iconColor: "text-[#F97316]",
      icon: <FaStar size={18} />,
    },
  ];

  // Handlers
  const handleAddUser = async (userData) => {
    const result = await addUser(userData).unwrap();
    await showAlert({
      title: "Berhasil",
      message: "User berhasil ditambahkan.",
    });
    return result;
  };

  const handleDeleteUser = async (userId) => {
    const confirmed = await showConfirm({
      title: "Hapus user?",
      message: "User ini akan dihapus secara permanen. Lanjutkan?",
      confirmText: "Ya, Hapus",
      cancelText: "Batal",
    });
    if (!confirmed) return;

    try {
      await removeUser(userId).unwrap();
      await showAlert({
        title: "Berhasil",
        message: "User berhasil dihapus.",
      });
    } catch (err) {
      await showAlert({
        title: "Gagal",
        message: err || "Gagal menghapus user.",
      });
    }
  };

  const handleViewUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      showAlert({
        title: "Detail User",
        message: `Nama: ${user.name}\nEmail: ${user.email}\nRole: ${user.role_name || "customer"}\nHP: ${user.hp_number || "-"}`,
      });
    }
  };

  if (usersLoading && users.length === 0) {
    return (
      <>
        <AsideContent />
        <NavPage />
        <main className="min-h-screen bg-[#F8F9FA] pt-16 pl-18 md:pl-60">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Memuat data...</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <AsideContent />
      <NavPage />

      <main className="min-h-screen bg-[#F8F9FA] pt-16 pl-18 md:pl-60">
        <section className="grid gap-6 p-6">
          {/* Header */}
          <div className="grid gap-4 sm:flex sm:items-center sm:justify-between">
            <div className="grid">
              <h1 className="text-2xl font-medium text-[#111827]">Manajemen Pengguna</h1>
              <p className="text-sm text-[#6B7280]">Kelola semua pengguna, admin, dan staff</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl transition-colors text-sm font-medium cursor-pointer"
            >
              <FaPlus size={14} />
              Tambah User
            </button>
          </div>

          {/* Stats */}
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {customerStats.map((stat) => (
              <article key={stat.label} className="grid gap-3 rounded-2xl border border-black/10 bg-white p-5">
                <div className={`grid h-9 w-9 place-items-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}>
                  {stat.icon}
                </div>
                <div className="grid gap-1">
                  <h2 className="text-2xl font-bold text-[#111827]">{stat.value}</h2>
                  <p className="text-xs font-normal text-[#99A1AF]">{stat.label}</p>
                </div>
              </article>
            ))}
          </section>

          {/* Search */}
          <section className="grid items-center gap-3 rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 rounded-xl bg-[#F3F4F6] px-4 py-2.5">
              <FaSearch size={16} className="text-[#6B7280]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 border-0 bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#6B7280]"
                placeholder="Cari nama, email, atau nomor HP..."
              />
            </div>
          </section>

          {/* Table */}
          <section className="grid overflow-hidden rounded-2xl border border-black/10 bg-white">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-245 border-collapse">
                <thead>
                  <tr className="bg-[#F1F2F4] text-left text-sm font-normal text-[#6B7280]">
                    <th className="px-4 py-3 font-normal">Pengguna</th>
                    <th className="px-4 py-3 font-normal">No HP</th>
                    <th className="px-4 py-3 font-normal">Bergabung</th>
                    <th className="px-4 py-3 font-normal">Total Pesanan</th>
                    <th className="px-4 py-3 font-normal">Total Belanja</th>
                    <th className="px-4 py-3 font-normal">Role</th>
                    <th className="px-4 py-3 font-normal">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center py-8 text-[#6B7280]">
                        {searchTerm ? "Tidak ada user yang sesuai" : "Belum ada user"}
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((user) => (
                      <CustomerRow
                        key={user.id}
                        user={user}
                        onView={handleViewUser}
                        onDelete={handleDeleteUser}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </main>

      {/* Add User Modal */}
      <AddUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddUser}
        roles={roles}
        loading={usersLoading}
      />
    </>
  );
}