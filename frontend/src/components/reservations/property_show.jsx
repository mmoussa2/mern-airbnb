import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import PropertyDetail from './property_detail.jsx';

import ReservationFormContainer from './reservation_compose_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReservationLink } from '../../util/link_util';


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
    const { propertyId, property, images } = this.props;

    if (!property) {
        console.log("aaaa")
      return null;
    }

    return (
      <div >
        <div >
         
          {/* <PropertyDetail property={property} images={images} />
          <ReservationLink
            component={ReservationFormContainer}
            to={`/properties/${propertyId}/reservations`}
            label="Reservation"
          />
          <ProtectedRoute
            path="/properties/:propertyId/reservations"
            component={ReservationFormContainer}
          /> */}
        </div>
      </div>
    );
  }
}



export default PropertyShow;