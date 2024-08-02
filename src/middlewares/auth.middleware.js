const jwtUtils = require('../utils/jwt.util');

const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ status: "fail", data: 'Não autorizado' });
    }
  
    const token = authorization.split(' ')[1];
  
    req.user = jwtUtils.verifyToken(token);
  
    next();
  } catch (error) {
    return res.status(401).json({ status: "fail", data: 'Não autorizado' });
  }
};

module.exports = authMiddleware;