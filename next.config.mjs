/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        URL_API: process.env.URL_API,
        TOKEN_APP: process.env.TOKEN_APP,
        TOKEN_ACCESS_API: process.env.TOKEN_ACCESS_API,
    },
};

export default nextConfig;
