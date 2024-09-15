  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    postcss: {
      // This is the configuration for PostCSS
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  };
  
  export default nextConfig;