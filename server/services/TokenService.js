const jwt = require("jsonwebtoken");

class TokenService {
  generateToken(user) {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
      expiresIn: "3d",
    });
  }

  decodeToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  }
}

module.exports = new TokenService();
