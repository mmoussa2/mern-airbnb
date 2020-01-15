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
      return (
        <div className="search-results flex flex-wrap">
          {this.props.properties.map((property, index) => {
            return (
              <div
                id={property._id}
                onClick={this.browseToProperty}
                className="search-result flex column"
                key={index}
              >
                <div>
                  <img
                    className="search-result-image"
                    src={property.imageUrl}
                  />
                </div>
                <div className="">
                  <div>Treehouse</div>&nbsp;
                  <div>
                    {property.beds > 1
                      ? property.beds + " beds"
                      : property.beds + " bed"}{" "}
                  </div>
                </div>
                <div>{property.title}</div>
                <div>${property.price} / night</div>
                <div>{property.location}</div>
              </div>
            );
          })}
        </div>
      );
  }
}

export default NavBar;