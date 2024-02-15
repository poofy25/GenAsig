/** @type {import('next').NextConfig} */
    const nextConfig = {
        reactStrictMode: false,
        images: {
          formats: ['image/webp','image/avif'],
          remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
              port: '',
              pathname: '**',
            },
          ],
        },
        env: {
          BASE_URL: process.env.BASE_URL,
        }
      }

export default nextConfig;
