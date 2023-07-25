const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.SECRET);
      const userId = decodedToken.userId;
      const roleUser = decodedToken.role
      req.auth = {
        userId: userId,
        roleUser: roleUser,
      };
      next();
    } catch (error) {
      res.status(401).json({ error });
    }
  };