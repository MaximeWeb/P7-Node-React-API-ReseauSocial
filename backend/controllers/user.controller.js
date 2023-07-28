const UserModel = require('../models/user.model');
const ObjectID = require ('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown : ' + req.params.id)

    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unknown : ' + err);

    })
};



module.exports.updateUser = (req, res, next) => {
    
    const UserObject = req.file ? // Fichier présent
    {
        ...req.body,
        picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body }; // Sans fichier*

    UserModel.findOne({ _id: req.params.id })
        .then(user => {
            if (user._id == req.auth.userId) {
                UserModel.updateOne({ _id: req.params.id }, {...UserObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Profil modifiée !' }))
                    .catch(error => res.status(400).json({ error }));
            } else {
                res.status(403).json({ message: 'acces refusé' })
            }


        })

}; 

module.exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown : ' + req.params.id)

    try {
        await UserModel.deleteOne({ _id: req.params.id}).exec();
        res.status(200).json({ message: "Successfully deleted. "})
    } catch (err) {
        return res.status(500).json({ message : err });
    }
};


