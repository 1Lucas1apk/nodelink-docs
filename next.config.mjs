import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "github.com",
      port: '',
      pathname: '/1Lucas1apk/lab/**'
    }]
  }
};

export default withMDX(config);
