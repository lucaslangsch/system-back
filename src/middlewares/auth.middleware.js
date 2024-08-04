const jwtUtils = require('../utils/jwt.util');

const authMiddleware = (req, res, next) => {
  try {

    const { authorization } = req.headers;
    if (!authorization) {

      res.status(401).json({ message: 'Acesso negado' });
    }

    const token = authorization.split(' ')[1];

    req.user = jwtUtils.verifyToken(token);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Acesso negado' });
  }
};

module.exports = authMiddleware;