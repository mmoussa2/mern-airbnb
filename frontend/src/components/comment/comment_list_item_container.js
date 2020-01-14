import React from 'react';
import { connect } from 'react-redux';

const Comment = ({ comment, author,createdDate }) => {
if(!comment || !author) return null;

  const timeStamp = createdDate.toString()
    .split("T")[0].split("-")
  const year = timeStamp[0]
  const month = {
    "01": "Jan", "02": "Feb",
    "03": "Mar", "04": "Mar",
    "05": "May", "06": "Jun",
    "07": "Jul", "08": "Aug",
    "09": "Sep", "10": "Oct",
    "11": "Nov", "12": "Dec"
  }[timeStamp[1]]
  const day = timeStamp[2]

  return (
    <div className="comment">
      <section className="top">
        <div className="userInfo">
          <img className="avatar" src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1501173171/avatar_default_wkpp05.png"/>
            <div>
            <span className="username link">{author.name}</span>
              <br></br>
            <small className="date">{month + " " + day + ", " + year}</small>
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