const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


exports.signUp = (req, res, next) => {
    userModel.findOne({email: req.body.email})
    .then(user => {
        if (user) {
            return res.status(401).json({ errorEmail: 'Email deja utilisé' });
        }
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new userModel({
                pseudo: req.body.pseudo,
                email: req.body.email,
                password: hash
            });
         
              user.save()
               // .then(() => res.status(201).json(user))
                .then(() => res.status(200).json({
                    userId: user._id,
                    token: jwt.sign({ userId: user._id,role: user.role },
                        process.env.SECRET, { expiresIn: '24h' }
                    
                    ),
                   
                })
               )

                .catch(error => res.status(400).json({ error }));
                
            
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.signIn = (req, res, next) => {
    userModel.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ errorEmail: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign({ userId: user._id,role: user.role },
                            process.env.SECRET, { expiresIn: '24h' }
                        
                        ),
                       
                    })
                   
                    
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.logout = (req, res, next) => {

  
};





