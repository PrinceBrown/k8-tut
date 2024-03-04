/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
dotenv.config();
const nextConfig = {
    env: {
        GATEWAY_URL: process.env.GATEWAY_URL,
        COPY_CAT_URL: process.env.COPY_CAT_URL,
      },
    output: "standalone",
};

export default nextConfig;
