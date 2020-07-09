const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://root-omega.vercel.app'
    : 'http://localhost:3000';

export default baseUrl;
