const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;
const fs = require('fs');

module.exports.readPost = ( req, res) => {
 PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error to get data: ' + err);
 })
};
  

module.exports.readOnePost = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('ID unknown : ' + req.params.id)

    PostModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unknown : ' + err);

    })
};

module.exports.createPost = (req, res, next) => {
    PostModel.create({
        message: JSON.parse(req.body.message).message,
        picture: `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`,
          userId : req.auth.userId,
           likes : 0,
          dislikes : 0,
          usersLiked : [],
         usersDisliked : [],

    })
   
      .then(() => res.status(201).json({ message: "Post postée !" }))
      .catch((error) => res.status(400).json({ error: error })); 
  };

 module.exports.updatePost = (req, res, next) => {
    
    const PostObject = req.file ? // Fichier présent
    {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body }; // Sans fichier*

    PostModel.findOne({ _id: req.params.id })
        .then(post => {
            if (post.userId == req.auth.userId) {
                PostModel.updateOne({ _id: req.params.id }, {...PostObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Post modifiée !' }))
                    .catch(error => res.status(400).json({ error }));
            } else {
                res.status(403).json({ message: 'acces refusé' })
            }


        })

}; 
    
   

module.exports.deletePost = ( req, res) => {
    PostModel.findOne({ _id: req.params.id })
        .then(post => {
            if (post.userId == req.auth.userId) {
                const filename = post.picture.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    PostModel.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Objet supprimé !' }) })
                        .catch(error => res.status(401).json({ error }));
                });
            } else {
                res.status(403).json({ message: 'acces refusé' })
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};



// like/dislike a post
module.exports.likePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.auth.userId;
    try {
      const post = await PostModel.findById(id);
      if (post.likes.includes(userId)) {
        await post.updateOne({ $pull: { likes: userId } });
        res.status(200).json("Post disliked");
      } else {
        await post.updateOne({ $push: { likes: userId } });
        res.status(200).json("Post liked");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };



 module.exports.commentPost = ( req, res) => {
  /*  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

    try {
        return PostModel.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    comments: {
                        commenterId: req.body.commenterId,
                        commenterPseudo: req.body.commenterPseudo,
                        text: req.body.text,
                        timestamp: new Date().getTime()
                    }
                }
            },
        )
    } catch (err) {
        
    } */
};

module.exports.editCommentPost = ( req, res) => {

};

module.exports.deleteCommentPost = ( req, res) => {

};

