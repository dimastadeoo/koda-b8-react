# 🛒 EShop - React E-Commerce

Easy Shop adalah aplikasi web e-commerce yang dibangun menggunakan **React** dengan arsitektur modern. Project ini menerapkan state management menggunakan **Redux**, penyimpanan state menggunakan **Redux Persist** dan **LocalStorage**, serta telah dilengkapi dengan pipeline **CI/CD** untuk proses build, release, dan deployment secara otomatis menggunakan **Docker**.

## 🚀 Live Demo

**Application:** http://103.93.135.33:9702

## ✨ Features

* 🛍️ Browse product catalog
* 🔍 Product search
* 🛒 Shopping cart
* ❤️ Wishlist management
* 👤 User authentication
* 📱 Responsive user interface
* ⚡ Fast and modern React application
* 🔄 Persistent application state using Redux Persist
* 💾 LocalStorage integration
* 🐳 Dockerized application
* 🚀 Automated deployment using GitHub Actions

## 🛠️ Tech Stack

### Frontend

* React
* Redux Toolkit
* Redux Persist
* React Router
* Context
* Outlet
* LocalStorage
* Vite
* TailwindCSS

### DevOps

* Docker
* GitHub Actions
* GitHub Releases
* CI/CD Pipeline

## 📦 Installation

Clone repository:

```bash
git clone https://github.com/dimastadeoo/koda-b8-react.git

cd koda-b8-react
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```text
<!-- data products -->
public/data/products.json
<!-- data gambar -->
public/img/

<!-- structure component -->
src/
├── components/
├── redux/
├── App.jsx
├── main.jsx
└── style.css

```

## 🔄 State Management

Project ini menggunakan:

* **Redux Toolkit** sebagai global state management.
* **Redux Persist** untuk mempertahankan state ketika browser di-refresh.
* **LocalStorage** sebagai media penyimpanan data persisten.

Dengan pendekatan ini, data seperti autentikasi pengguna maupun keranjang belanja tetap tersimpan meskipun halaman dimuat ulang.

## 🐳 Docker Support

Project telah dikonfigurasi agar dapat dibangun sebagai Docker image menggunakan Dockerfile.

Contoh build image:

```bash
docker docker pull ghcr.io/dimastadeoo/koda-b8-react:latest
```

Menjalankan container:

```bash
docker run -p ghcr.io/dimastadeoo/koda-b8-react:latest
```

## ⚙️ CI/CD Pipeline

Project ini telah menerapkan otomatisasi deployment menggunakan **GitHub Actions**.

Alur deployment:

1. Membuat Git tag baru.
2. Push tag ke GitHub.
3. GitHub Actions melakukan build project.
4. Build artifact dipublikasikan pada **GitHub Releases**.
5. Docker image dibangun secara otomatis.
6. Server melakukan update image terbaru.
7. Container lama dihentikan dan diganti dengan container baru.
8. Aplikasi langsung berjalan menggunakan versi terbaru tanpa proses manual.

Pipeline ini memungkinkan proses deployment menjadi lebih cepat, konsisten, dan minim kesalahan.

## 📦 Release Management

Setiap versi aplikasi dipublikasikan melalui **GitHub Releases**.

Seluruh build production akan tersedia pada halaman **Releases**, sehingga setiap versi aplikasi dapat dilacak dan diunduh dengan mudah.

## 👨‍💻 Author

**Dimas Tadeo**

* GitHub: https://github.com/dimastadeoo
* Repository: https://github.com/dimastadeoo/koda-b8-react

## 📄 License

This project is licensed under the MIT License.
