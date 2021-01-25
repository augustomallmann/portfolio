module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: 'https://sleepy-retreat-37854.herokuapp.com',
    SENDGRID_API_KEY:
      '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',
  },
};
