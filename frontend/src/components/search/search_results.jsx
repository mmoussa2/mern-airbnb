import React from 'react';
import './search.css';
import "../../assets/root.css";

class NavBar extends React.Component {
  render() {
    let result = null
    if (this.props.search !== "") {
      result = (
        <div className="search-results">
          {this.props.properties.map((property, index) => {
            return (
              <div className="card" key={index}>
                <img src={property.imageUrl}/>
                <div className="container">
                  <h2>{property.title}</h2>
                  <h4>{property.location}</h4>
                  <h4>${property.price} / night</h4>
                  <h4>{property.beds > 1 ? property.beds + " beds" : property.beds + " bed" } </h4>
                </div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return null;
    }
    return result;
  }
}

export default NavBar;