module.exports = {
  db: process.env.MONGO_URL || 'mongodb://localhost:27017/docubot',
  env: process.env.ENV || 'dev'
}
