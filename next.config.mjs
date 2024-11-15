/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Required for GitHub Pages
    },
  };
  
  export default nextConfig;
  
  