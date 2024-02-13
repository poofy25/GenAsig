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
        }
      }

export default nextConfig;
