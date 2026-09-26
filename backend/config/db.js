const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const dbconnect = async () => {
  return mongoose.connect(process.env.MONGODB_URL);
};

module.exports = dbconnect;