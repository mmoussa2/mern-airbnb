import React from 'react';
import './search.css';
import "../../assets/root.css";

class NavBar extends React.Component {
  render() {
    let result = null
    if (this.props.search !== "") {
      result = (
        <div className="search-results flex flex-wrap">
          {this.props.properties.map((property, index) => {
            return (
              <div className="search-result flex column" key={index}>
                <div className="">
                  <div>Treehouse</div>&nbsp;
                  <div>{property.beds > 1 ? property.beds + " beds" : property.beds + " bed" } </div>
                </div>
                <div>{property.title}</div>
                <div>${property.price} / night</div>
                <div>{property.location}</div>
            </div>
            )
          })}
        </div>
      )
    } else {
      result = <div className="search-results">
        no search
      </div>
    }
    return result;
  }
}

export default NavBar;