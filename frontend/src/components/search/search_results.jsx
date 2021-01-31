import React from 'react';
import './search.css';
import "../../assets/root.css";

class NavBar extends React.Component {
  constructor (props) {
    super(props)

    this.browseToProperty = this.browseToProperty.bind(this)

    this.state = {
      properties: {}
    }

  }

  browseToProperty (e) {
    e.preventDefault()
    this.props.history.push(`/properties/${e.currentTarget.id}`)
  }

  render() {
    if (this.props.properties) {
      this.props.properties.then(result => {
        return this.setState({ properties: result });
      });
    }

    if (Object.values(this.state.properties).length === 0) return null
      return (
        <div className="search-results">
          {Object.values(this.state.properties).map((property, index) => {
            return (
              <div
                id={property._id}
                onClick={this.browseToProperty}
                className="search-result flex column"
                key={index}
              >
                <div>
                  <div className="card">
                    <img src={property.imageUrls[0]} alt="" />
                    <div className="container">
                      <h2>{property.title}</h2>
                      <h4>${property.price} / night</h4>
                      <h4>{property.location}</h4>
                      <h4>
                        {property.beds > 1
                          ? property.beds + " beds"
                          : property.beds + " bed"}{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
  }
}

export default NavBar;