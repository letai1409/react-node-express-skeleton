export const API = {
  endpoint: process.env.END_POINT || 'localhost:3001',
  port: process.env.PORT || 3001
};
export const DATABASE = {
  urlConnection:
    process.env.MONGO_CONNECT || 'mongodb://localhost:27017/myapp'
};
