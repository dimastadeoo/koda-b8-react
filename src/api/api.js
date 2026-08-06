import { forceLogout } from "./authService";

const url = import.meta.env.VITE_BACKEND_URL;
const port = import.meta.env.VITE_BACKEND_PORT;
const API_BASE = `${url}:${port}`;

export async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem('token');

    // Siapkan headers
    const headers = {
        ...options.headers,
    };

    // Jika body adalah FormData, jangan set Content-Type (biar browser set boundary)
    if ((options.body instanceof URLSearchParams)){
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }else if (!(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    } 

    // Tambahkan Authorization jika ada token
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers,
    });

    const data = await response.json();

    if (response.status === 401) {
        forceLogout(data.message);
    }
    return { response, data };
}