module.exports = {
  apps: [
    {
      name: 'cristalux-admin',
      script: 'build/index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3004,
        BACKEND_API_URL: 'https://ecom.oussamagaham.com/api/v1',
        PUBLIC_BASE_URL: 'https://ecom.oussamagaham.com',
        PUBLIC_API_URL: '/api/v1'
      }
    }
  ]
};
