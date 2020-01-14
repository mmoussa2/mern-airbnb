import React from 'react';
import SearchFilterContainer from "./search_filter_container"
import SearchResults from "./search_results.jsx"

class SearchWrapper extends React.Component {
  render() {
    return (
      <SearchResults {...this.props} />
    );
  }
}

export default SearchWrapper;