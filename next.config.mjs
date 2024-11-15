/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Required for GitHub Pages
    },
    basePath: '/markdeaconu.github.io', // Replace with your repository name
  };
  
  export default nextConfig;
  