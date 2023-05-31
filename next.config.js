const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

module.exports = {
  env: {
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    MONGODB_URI : process.env.MONGODB_URI,
  },
};
