const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.readPost = ( req, res) => {
 PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error to get data: ' + err);
 })
};

module.exports.createPost = async ( req, res) => {
    const newPost = new PostModel( req.body );
   
    try {
        const post = await newPost.save();
        return res.status(201).json(post);
}  catch (err) {
    return res.status(400).send(err);
}

};

module.exports.updatePost = ( req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('ID unknown : ' + req.params.id);

    const updateRecord = {
        message: req.body.message
    }
    
    PostModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new : true},
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Update error: " + err);
        }
    )
};

module.exports.deletePost = ( req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

    PostModel.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err)res.send(docs);
        else console.log("Delete error : " + err)
    });
};

module.exports.likePost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

    try {
        await PostModel.findByIdAndUpdate(
        req.params.id,
        {
           $addToSet: {likers: req.body.userId}
        },
        { new : true},
        (err, docs) => {
            if (err) return res.status(400).send(err)
        }
        );
        await UserModel.findByIdAndUpdate(
            req.body.id,
            {
                $addToSet: {likes: req.params.id}
            },
            { new: true},
            (err, docs) => {
                if (!err) res.send(docs);
                else return res.status(400).send(err);
            }
        );
    } catch (err) {
        return res.status(400).send(err)
    }
};

module.exports.like = async (req, res) => {
const idPost = req.params.id;

const {UserId} = req.body;


try {
    const post = await PostModel.findByIdAndUpdate(idPost)
    if (post.likes.includes(UserId)) {
        await post.updateOne({$pull: {likes:UserId}})
        res.status(200).json("J'aime pas le post")
    }
    else {
        await post.updateOne({$push: {likes:UserId}})
       
        .then((poste) => console.log("reussit" + poste))
        .catch(err => console.log("error" + err)) 

        res.status(200).json("J'aime le post")
    }
    
    
    
} catch (err) {
    res.status(500).json(err)
}
};


module.exports.unlikePost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

    try {
        await PostModel.findByIdAndUpdate(
        req.params.id,
        {
           $pull: {likers: req.body.id}
        },
        { new : true},
        (err, docs) => {
            if (err) return res.status(400).send(err)
        }
        );
        await UserModel.findByIdAndUpdate(
            req.body.id,
            {
                $pull: {likes: req.params.id}
            },
            { new: true},
            (err, docs) => {
                if (!err) res.send(docs);
                else return res.status(400).send(err);
            }
        );
    } catch (err) {
        return res.status(400).send(err)
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

