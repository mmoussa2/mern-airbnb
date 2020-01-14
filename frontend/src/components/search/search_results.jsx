import React from 'react';
import './search.css';
import "../../assets/root.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="search-results">
        {this.props.properties.map((property, index) => {
          return (
            <div className="card" key={index}>
              <img src={property.imageUrl} alt='' />
              <div className="container">
                <h2>{property.title}</h2>
                <h4>{property.location}</h4>
                <h4>${property.price} / night</h4>
                <h4>
                  {property.beds > 1
                    ? property.beds + " beds"
                    : property.beds + " bed"}{" "}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NavBar;