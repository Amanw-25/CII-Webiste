// // middleware/auth.js
// const jwt = require('jsonwebtoken');

// module.exports = function(req, res, next) {
//     const token = req.header('x-auth-token');
//     if (!token) return res.status(401).send('No token, authorization denied');

//     try {
//         const decoded = jwt.verify(token, 'secret');
//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.status(401).send('Token is not valid');
//     }
// };
