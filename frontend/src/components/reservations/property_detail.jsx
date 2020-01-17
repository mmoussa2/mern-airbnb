import './reservation.css'

import React from 'react';


import CommentListItemContainer from '../comment/comment_list_item_container';

const commentList = (comments) => {
  if (!comments) return null;
  return Object.values(comments).map(comment => (
    <CommentListItemContainer comment={comment}  key={comment._id} />
  ))
};

class PropertyDetail extends React.Component {

  render() {
    const { property, comments} = this.props;
   
    return (
      <div className="mainPropertyDetails" >
        <br />
        <div className="propertyDetail" >
          <div>
            <h1>{property.title}</h1>
          </div>
          <br></br>
      
          </div>
          <div>
            <span className="preData">
              {property.location}
            </span>
          </div>
          <br></br>
          <div className="preDataColloection">
          <span className="preData">
            {property.baths_type} baths
            </span>
          <span className="preData">
            {property.bedrooms_type} bedroom
            </span>
          <span className="preData">
             { property.guest_size } guests
            </span>
          <span className="preData">
              { property.bedrooms } bedroom
            </span>
          <span className="preData">
              { property.beds } beds
            </span>
          <span className="preData">
              { property.baths } bath
            </span>
          </div>
         <div className="seperator">
        </div>
       
        <div >
          <span className="preData">
           {property.description}
          </span>
        </div>
        <div className="seperator">

        </div>
        <div className="reviews">
          <h2>Reviews</h2>
          {(Object.values(comments).length === 0) ? <p>{"No reviews"}</p>  : commentList(comments)}
        </div>
      </div>
    );
  }

}

export default PropertyDetail;