import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    // TAMBAHKAN BLOK SERVER DI BAWAH INI
    server: {
        host: '0.0.0.0', // Mengizinkan akses dari semua IP di jaringan yang sama
        hmr: {
            host: '192.168.1.14', // GANTI dengan alamat IPv4 Laptop kamu (cek via ipconfig)
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
});