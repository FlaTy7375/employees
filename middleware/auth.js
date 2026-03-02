const jwt = require('jsonwebtoken');
const { prisma } = require('../prisma/prisma-client');

const auth = async function(req, res, next) {
    try {
        console.log('Authorization header:', req.headers.authorization);
        let token = req.headers.authorization?.split(' ')[1];
        console.log('Extracted token:', token);
        
        if (!token) {
            console.log('No token provided');
            return res.status(401).json({ message: "Токен не предоставлен" })
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);
        
        const user = await prisma.user.findUnique({
            where: {
                id: decoded.id
            }
        })
        
        console.log('Found user:', user);

        req.user = user;

        next();
    } catch (err) {
        console.log('Auth error:', err.message);
        res.status(401).json({ message: "Не авторизован" })
    }
}

module.exports = { auth }