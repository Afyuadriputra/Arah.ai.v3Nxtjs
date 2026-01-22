/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Wajib untuk export statis
  basePath: '/Arah.ai.v3Nxtjs', // Harus sama persis dengan nama repo di GitHub
  images: {
    unoptimized: true, // GitHub Pages tidak mendukung Image Optimization bawaan
  },
};

export default nextConfig;
