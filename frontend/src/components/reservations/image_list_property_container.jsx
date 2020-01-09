import React from 'react';

const Image = ({ image }) => {

  return (
        <li>
          <img className="index-image" src={image.image_url} alt={image.description} />
       </li>
  );
};


export default Image;