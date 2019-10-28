import React from 'react';
import { connect } from 'react-redux';
import { getlistings } from '../actions/index';
import Listing from './Listing';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

// Styled Components
import { SearchResultsContainer } from './styles/searchResults';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getlistings();
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <SearchResultsContainer>
          {this.props.listings.map((listing) => <Listing listing={listing} key={listing.id} />)}
        </SearchResultsContainer>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    listings: state.listings,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getlistings }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
