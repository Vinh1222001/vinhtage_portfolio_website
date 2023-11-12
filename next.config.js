/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'drive.google.com',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port:'',
            pathname:"/dnmn9nbil/**"
          },
          {
            protocol: 'https',
            hostname: 'youtube.com',
          },
          {
            protocol: 'https',
            hostname: 'www.youtube.com',
          },
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
          },
        ],
      },
}

module.exports = nextConfig
