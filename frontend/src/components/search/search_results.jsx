import React from 'react';
import './search.css';
import "../../assets/root.css";

class NavBar extends React.Component {
  constructor (props) {
    super(props)

    this.browseToProperty = this.browseToProperty.bind(this)
  }

  browseToProperty (e) {
    e.preventDefault()
    console.log(e.currentTarget)
    this.props.history.push(`/properties/${e.currentTarget.id}`)
  }

  render() {
    console.log(this.props)
      return (
        <div className="search-results">
          {this.props.properties.map((property, index) => {
            return (
              <div
                id={property._id}
                onClick={this.browseToProperty}
                className="search-result flex column"
                key={index}
              >
                <div>
                  <div className="card">
                    <img src={property.imageUrl} alt="" />
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