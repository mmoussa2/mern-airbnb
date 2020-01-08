import React from 'react';
import './search.css';
import "../../assets/root.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="search-filter">
        <div className="flex">
          <div className="filter-toggle">Dates</div>
          <div className="filter-toggle">Guests</div>
          <div className="filter-toggle">Price</div>
        </div>
      </div>
    );
  }
}

export default NavBar;