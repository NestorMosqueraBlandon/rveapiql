
export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 4000,
  mongodbURL:
    process.env.MONGODB_URI ||
    'mongodb+srv://user:api12345@cluster0.2tqpl.mongodb.net/apirest?retryWrites=true&w=majority',
  accessKeyId: process.env.accessKeyId || 'AKIAVHJK4GQ6BBLS6M62',
  secretAccessKey:
    process.env.secretAccessKey || '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',
};