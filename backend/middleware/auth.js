const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(' ')[1];
        console.log(token)
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) { // Contrôle des TOKEN 
            throw "Mot de passe invalide"; // Si true arrête l'instruction, si false continue l'instruction
        } else {
            req.auth = { /* tableau json qui contien l'id de l'utilisateur qui s'est conncté */
                userId: userId,
                
            };
            next();
        }
    } catch (error) {
        res.status(401).json({ error });
    }
};