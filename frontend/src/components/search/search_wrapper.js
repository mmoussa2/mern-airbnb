import React from 'react';
import SearchFilterContainer from "./search_filter_container"
import SearchResults from "./search_results"

class SearchWrapper extends React.Component {
  render() {
    return (
      <div>
        <SearchFilterContainer />
        <SearchResults {...this.props} />
      </div>
    );
  }
}

export default SearchWrapper;