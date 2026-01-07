/** @type {import('next').NextConfig} */

const nextConfig = {
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
  images: {
    // Removed deprecated 'domains'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'media.gettyimages.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'www.stambol.com',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'as2.ftcdn.net', // Adobe Stock
      },
      {
        protocol: 'https',
        hostname: 'elements-resized.envatousercontent.com',
      },
      // Optional: Add these for even more free sources (Pexels, Unsplash, Pixabay)
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
    protocol: 'https',
    hostname: 'content.presentermedia.com',
  },
  {
        protocol: 'https',
        hostname: 'images.rawpixel.com',
      },
      {
    protocol: 'https',
    hostname: 'static.vecteezy.com',
  },
  

    ],
  },
};

module.exports = nextConfig;