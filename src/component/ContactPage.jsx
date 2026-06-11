import NavBar from "./NavBar";

import React from 'react';

function TableRespon(props) {
    return (
        <div className="max-w-4xl mx-auto m-4 text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Daftar Pesan Masuk</h2>

            {props.contactList.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Belum ada data yang dikirim.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-gray-100">
                                <th className="py-3 px-4 font-semibold text-sm text-gray-600">Tanggal</th>
                                <th className="py-3 px-4 font-semibold text-sm text-gray-600">Nama</th>
                                <th className="py-3 px-4 font-semibold text-sm text-gray-600">Email</th>
                                <th className="py-3 px-4 font-semibold text-sm text-gray-600">No HP</th>
                                <th className="py-3 px-4 font-semibold text-sm text-gray-600">Pesan</th>
                                <th className="py-3 px-4 font-semibold text-sm text-gray-600 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {props.contactList.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition">
                                    <td className="py-3 px-4 text-gray-500">{item.tanggal}</td>
                                    <td className="py-3 px-4 font-medium text-gray-800">{item.nama}</td>
                                    <td className="py-3 px-4 text-gray-600">{item.email}</td>
                                    <td className="py-3 px-4 text-gray-600">{item.noHp}</td>
                                    <td className="py-3 px-4 text-gray-600 max-w-xs truncate">{item.pesan}</td>
                                    <td className="py-3 px-4 text-center">
                                        <button
                                            onClick={() => props.handleDelete(item.id)}
                                            className="text-red-500 hover:text-red-700 font-semibold text-xs bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default function Contact() {
    const [contactList, setContactList] = React.useState(() => {
        const localData = localStorage.getItem('savedContacts');
        if (localData && localData !== "undefined") {
            try {
                return JSON.parse(localData);
            } catch (error) {
                console.error("Gagal memuat data lokal:", error);
                return [];
            }
        }
        return [];
    });
    // Muat data lama dari Local Storage saat awal halaman di-load

    // FUNGSI SUBMIT UTAMA
    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah halaman reload

        // Ambil elemen form yang sedang di-submit
        const formElemen = e.target;

        // Manfaatkan objek bawaan JavaScript: FormData
        const form = new FormData(formElemen);

        // Ambil nilai secara instan berdasarkan atribut 'name' di HTML kamu
        const nameValue = form.get('name');
        const emailValue = form.get('email');
        const noHpValue = form.get('noHp');
        const messageValue = form.get('message');

        // Validasi sederhana jika ada kolom yang kosong
        if (!nameValue.trim() || !emailValue.trim() || !noHpValue.trim() || !messageValue.trim()) {
            alert("Harap isi semua kolom!");
            return;
        }

        // Susun data baru ke dalam objek
        const newData = {
            id: Date.now(),
            nama: nameValue,
            email: emailValue,
            noHp: noHpValue,
            pesan: messageValue,
            tanggal: new Date().toLocaleDateString('id-ID')
        };

        // Gabungkan dengan data lama & simpan ke Local Storage
        const updatedList = [...contactList, newData];
        setContactList(updatedList);
        localStorage.setItem('savedContacts', JSON.stringify(updatedList));

        // Reset isi semua kotak input form secara otomatis setelah submit berhasil
        formElemen.reset();
    };

    const handleDelete = (id) => {
        const filteredList = contactList.filter(item => item.id !== id);
        setContactList(filteredList);
        localStorage.setItem('savedContacts', JSON.stringify(filteredList));
    };

    return (
        <div>
            <NavBar />
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-gray-500 mb-6">Punya pertanyaan? Silakan hubungi kami melalui formulir di bawah ini:</p>
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">Nama</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Masukkan nama Anda" id="name" name="name" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Masukkan nama Anda" id="email" name="email" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="no-hp">No HP</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Masukkan nama Anda" id="no-hp" name="noHp" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">Pesan</label>
                        <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none h-24" placeholder="Tulis pesan di sini..." id="message" name="message"></textarea>
                    </div>
                    <div className="flex gap-4">
                        <button type="submit" className="w-full py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition active:scale-95">
                            Kirim Pesan
                        </button>
                        <button type="reset" className="w-full py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition active:scale-95">
                            Reset Data
                        </button>
                    </div>
                </form>
            </div>
            {/* SECTION TABEL DATA */}
            <TableRespon contactList = {contactList} handleDelete={handleDelete}/>
        </div>
    );
}