module.exports = (hash, accessToken) => {
  if (accessToken === null || hash === null || hash === '') {
    return false
  }
  
  const crypto = require('crypto');
  const localHost = 'localhost:3000'
  const localToken = crypto
    .createHmac('sha256')
    .update(localHost)
    .digest('hex');

  return hash === localToken;
};
