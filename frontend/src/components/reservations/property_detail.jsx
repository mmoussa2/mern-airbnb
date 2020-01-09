import React, { Component } from 'react';
import { Link } from 'react-router';

import ImageListPropertyContainer from './image_list_property_container';

const imageList = (images) => {

  if (!images) return null;
  return images.map(image => (
    <ImageListPropertyContainer image={image} key={image.id} />
  ))
};

class ImageDetail extends React.Component {

  render() {
    console.log(property)
    console.log(images)
    const { property, images } = this.props;

    return (
      <div>
        <ul >
          {imageList(images)}
        </ul>
        <br />
        <div >
          <h3>{property.title}</h3>
          <ul>
            <li>
              Description: {property.description}
            </li>
            <li>
              Location: {property.location}
            </li>
            <li>
              Baths Type: {property.baths_type}
            </li>
            <li>
              Bedrooms Type: {property.bedrooms_type}
            </li>
            <li>
              Price: {property.price}
            </li>
            <li>
              Guest Size: {property.guest_size}
            </li>
            <li>
              Bedrooms: {property.bedrooms}
            </li>
            <li>
              Beds: {property.beds}
            </li>
            <li>
              Baths: {property.baths}
            </li>
          </ul>
       
        </div>
      </div>
    );
  }

}

export default ImageDetail;