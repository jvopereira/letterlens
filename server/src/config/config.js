require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  fastifyPort: process.env.PORT,
  pythonApiUrl: process.env.PYTHON_API_URL
};