const withPWAInit = require('next-pwa');

const isDev = process.env.NODE_ENV !== 'production';

const withPWA = withPWAInit({
    dest: 'public',
    disable: isDev,
    runtimeCaching: [
        {
            urlPattern: /\.(?:png|jpg|jpeg|gif|svg|webp)$/,
            handler: 'NetworkOnly',
        },
    ],

    exclude: [
        ({ asset }) => {
            if (
                asset.name.startsWith('server/') ||
                asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/)
            ) {
                return true;
            }
            return isDev && !asset.name.startsWith('static/runtime/');
        },
    ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
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
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['static.anilibria.tv'],
    },
};

module.exports = withPWA(nextConfig);
