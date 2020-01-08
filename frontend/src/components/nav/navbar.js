import React from 'react';
import { Link, Route } from 'react-router-dom';
import './navbar.css';
import "../../assets/root.css";
import SearchWrapperContainer from "../search/search_wrapper_container"

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.findFilteredProperties = this.findFilteredProperties.bind(this);
    this.pushToSearch = this.pushToSearch.bind(this);

    this.state = {
      search: ""
    }
  }

  componentDidMount () {
    this.props.sendGetProperties()
    this.props.sendGetSearches()
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="flex space-around">
          <Link to={"/profile"}>Profile</Link>&nbsp;
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>&nbsp;
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  showSearchModal (e) {
    e.preventDefault()
    e.stopPropagation()

    const navSearchModal = document.getElementsByClassName(
      "nav-search-modal"
    )[0];

    navSearchModal.classList.remove("hidden");
    setTimeout(() => {
      navSearchModal.style.width = "450px"
    }, 1)
   

  }

  hideSearchModal (e) {
    e.preventDefault();
    e.stopPropagation();


    const navSearchModal = document.getElementsByClassName(
      "nav-search-modal"
    )[0];
    navSearchModal.classList.add("hidden");
    navSearchModal.style.width = "350px"
  }

  preventBubbling (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({search: e.currentTarget.value})
  }

  pushToSearch (e) {
    e.preventDefault()
    this.props.history.push("/s")
  }

  findFilteredProperties () {
    if (this.props.properties) {
      const regexSearch = new RegExp(this.state.search, "i")
      const appliedFilters = Object.values(this.props.properties)
        .filter(property => {
          return regexSearch.test(property.location);
      })
      return appliedFilters
    }
    
    
  }
  
  render() {
    if (!this.props.properties) return null;
    if (!this.props.searches) return null;
    return (
      <div>
        <div className="flex space-between align-center nav-bar-wrapper">
          <div className="flex align-center">
            <h1>Endorbnb</h1>

            <form 
              onSubmit={this.pushToSearch}
              className="ml">
              <input
                className="nav-search-input p"
                placeholder="Try 'Barcelona'"
                onChange={this.handleChange}
                // onSelect={this.showSearchModal}
                // onBlur={this.hideSearchModal}
                type="text"
              ></input>

              <input type="submit" className="hidden"></input>
              <div
                onClick={this.preventBubbling}
                className="nav-search-modal p hidden"
              >
                {/* {Object.values(this.props.searches).map(
                (previousSearch, index) => {
                  return (
                  <div className="previous-search" key={index}>
                    {previousSearch.search}
                  </div>
                  )
                }
              )} */}
              </div>
            </form>
          </div>
          <div className="flex">{this.getLinks()}</div>
        </div>
        {/* <SearchWrapperContainer properties={this.findFilteredProperties()} search={this.state.search} /> */}
        <Route
          path='/s/'
          render={() => <SearchWrapperContainer properties={this.findFilteredProperties()} search={this.state.search} />}
        />
      </div>
    );
  }
}

export default NavBar;