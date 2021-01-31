const express = require("express");
const router = express.Router();
const Comment = require('../../models/Comment')

const validateCommentInput = require("../../validations/comments");

router.post('/create',(req,res)=>{

  const { errors, isValid } = validateCommentInput(req.body);  

  if (!isValid) {
    return res.status(400).json(errors);      
  }

  const newComments = new Comment({
    property_id: req.body.property_id,
    user_id: req.body.user_id,
    comment: req.body.comment,
    createdDate: Date.now()
  });
  newComments
  .save()
  .then(comment=>{
  res.json(comment)})
  .catch(err=> res.json(err));
});

router.get('/all',(req,res)=>{
  Comment
  .find()
  .then(comments=>res.json(comments))
  .catch(err=> res.json(err));
});

router.get('/:propertyId', (req,res)=>{
  Comment.find()
  .then(comments =>{
    const result =   comments.filter((comment) => {
      return comment.property_id.toString() == req.params.propertyId;
    })
    return res.json(result);
  })
  .catch(err => res.json(err));
});




module.exports = router;