import React, { Component } from 'react';


import PropertyDetail from './property_detail.jsx';

import ReservationFormContainer from './reservation_compose_container';
import { ProtectedRoute } from '../../util/route_util';


class PropertyShow extends Component {
  componentDidMount() {
    this.props.fetchProperty(this.props.propertyId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.propertyId !== this.props.match.params.propertyId) {
      this.props.fetchProperty(this.props.match.params.propertyId);
    }
  }

  render() {
    const { property, images } = this.props;
    console.log(this.props)
    console.log(property)
    if (!property) {
    
      return null;
    }

    return (
      <div >
        <div >
          <PropertyDetail property={property} images={images} />
       
          <ProtectedRoute
            path="/properties/:propertyId/"
            component={ReservationFormContainer}
          />
        </div>
      </div>
    );
  }
}



export default PropertyShow;