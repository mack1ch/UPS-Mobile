/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack(config) {
        config.module.rules.push({
            test: /\.(woff|woff2)$/,
            use: {
                loader: 'url-loader',
            },
        });

        return config;
    },
};

module.exports = nextConfig;
