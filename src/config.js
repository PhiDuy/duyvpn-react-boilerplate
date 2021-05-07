require('dotenv').config();

module.exports = {
  secret            : process.env.SECRET_TOKEN,
  refreshTokenSecret: process.env.SECRET_REFRESHTOKEN,
  tokenLife         : process.env.TOKEN_LIFE || 50000,        // 15 phút
  refreshTokenLife  : process.env.REFRESHTOKEN_LIFE || 86400, //  một ngày
  portListen        : process.env.PORT || 3001
};