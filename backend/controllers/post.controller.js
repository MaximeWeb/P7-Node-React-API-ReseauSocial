const PostModel = require('../models/post.model');
const ObjectId = require('mongoose').Types.ObjectId;
const fs = require('fs');

module.exports.readPost = ( req, res) => {
     const sort = { length: -1 };
 PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error to get data: ' + err);
 }).sort({_id: -1})
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
    const image = req.file ?  `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }` : null
    PostModel.create({
        message: JSON.parse(req.body.message).message,
        picture: image,
          userId : req.auth.userId,
           likes : [],
    
    })
   
      .then(() => res.status(201).json({ message: "Post postée !" }))
      .catch((error) => res.status(400).json({ error: error })); 
  };

 module.exports.updatePost = (req, res, next) => {
    
    const PostObject = req.file ? // Fichier présent
    {
        ...req.body,
        picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body }; // Sans fichier*

    PostModel.findOne({ _id: req.params.id })
        .then(post => {
            if (post.userId == req.auth.userId || req.auth.roleUser === "admin" ) {
                PostModel.updateOne({ _id: req.params.id }, {...PostObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Post modifiée !' }))
                    .catch(error => res.status(400).json({ error }));
            } else {
                res.status(403).json({ message: 'acces refusé' })
            }
        })
}; 
module.exports.deletePost = async (req, res) => {
    const id = req.params.id;
    try {
      const post = await PostModel.findById(id);
      if (post.userId === req.auth.userId || req.auth.roleUser === "admin" ) {
        if(post.picture === null) {
            await post.deleteOne(); 
        } else {
            const filename = post.picture.split('/images/')[1];
            fs.unlink(`images/${filename}`,  async () => {
                await post.deleteOne(); 
            })
        }
         res.status(200).json("Post supprimé");
      } else {
        res.status(403).json("Vous n'etes pas autorisé");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  



// like/dislike a post
module.exports.likePost = async (req, res) => {
    const id = req.params.id;
    const userId  = req.auth.userId;
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


