/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hapus atau komen basePath jika menggunakan Vercel
  // basePath: '/Arah.ai.v3Nxtjs', 
  
  images: {
    unoptimized: true, // Bisa dihapus jika ingin Vercel mengoptimasi gambar Anda otomatis
  },
};

export default nextConfig;
