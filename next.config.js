const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { webpack }) {
        config.resolve.alias["@"] = path.resolve("./src/*");

        return config;
    },
};

module.exports = nextConfig;