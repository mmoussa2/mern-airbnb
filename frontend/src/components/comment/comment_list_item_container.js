import React from 'react';
import { connect } from 'react-redux';

const Comment = ({ comment, author,createdDate }) => {
if(!comment || !author) return null;
  return (
    <div className="comment">
      <section className="top">
        <div className="userInfo">
          <img className="avatar" src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1501173171/avatar_default_wkpp05.png"/>
            <div>
            <span className="username link">{author.name}</span>
              <br></br>
            <span className="date">{createdDate}</span>
            </div>
        </div>
      </section>
      <p>{comment.comment}</p>
    </div>
  );
};



const mapStateToProps = ({ entities: { users } }, { comment }) => {

  return {
    author: users[comment.user_id],
    comment: comment,
    createdDate: comment.createdDate
  };
};

export default connect(mapStateToProps)(Comment);