const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
property_id: {type: Schema.Types.ObjectId, require:true},
user_id: {type:Schema.Types.ObjectId, require:true},
comment: {type:String, require:true},
createdDate: {type: Date}
});

module.exports = Comment= mongoose.model("Comment", CommentSchema);