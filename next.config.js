const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { webpack }) {
        config.resolve.alias["@"] = path.resolve("./src");

        return config;
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'strapi342134.s3.amazonaws.com',
                port: '1337',
                pathname: '/small_avatar_ef077e4fe6.png',
            },
        ],
    },
};

module.exports = nextConfig;
