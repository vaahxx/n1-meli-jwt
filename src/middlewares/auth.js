const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
// recurso do node 8: transforma o síncrono em assíncrono
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'sem token'});

    //despreza o primeiro array, pega só o segundo que é o token
    const [, token] = authHeader.split(' ');
    
    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.id; 
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'token inválido' });
    }
};
