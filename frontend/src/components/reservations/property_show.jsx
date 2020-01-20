import React, { Component } from 'react';
import { ProtectedRoute } from '../../util/route_util';

import PropertyDetail from './property_detail.jsx';
import ReservationFormContainer from './reservation_compose_container';
import CommentFormContainer from '../comment/comment_form_container';

class PropertyShow extends Component {
  componentDidMount() {
    this.props.fetchProperty(this.props.propertyId);
    this.props.fetchAllReservations();
    this.props.fetchAllUsers();
    this.props.fetchComments(this.props.propertyId);
  }

  componentDidUpdate(prevProps) {
   
    if (prevProps.match.params.propertyId !== this.props.match.params.propertyId) {
      this.props.fetchProperty(this.props.match.params.propertyId);
      this.props.fetchAllReservations();
      this.props.fetchAllUsers();
      this.props.fetchComments(this.props.match.params.propertyId);
     
    }
  }

  render() {
    const { property, image, comments } = this.props;
  

    if (!property) {
      return null;
    }
    return (
      <div >
        <div className="propertyDetailComponent"> 
          <img className="headerImage" src={image} alt={property.description} />
        </div>
        <div className="propertyDetailComponent flex">
           <div className="propertyDetails"> 
            <PropertyDetail key={property._id} property={property} comments={comments}  />
       
              <ProtectedRoute
                path="/properties/:propertyId/"
                component={ReservationFormContainer}
              />
      
            <ProtectedRoute
              path="/properties/:propertyId/"
              component={CommentFormContainer}
            />

        </div>
        </div>
      </div>
    );
  }
}



export default PropertyShow;