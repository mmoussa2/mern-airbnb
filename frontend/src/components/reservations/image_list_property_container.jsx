import React from 'react';
import { connect } from 'react-redux';

const Image = ({ image }) => {

  return (
        <li>
          <img className="index-image" src={image.image_url} alt={image.description} />
       </li>
  );
};


export default Image;