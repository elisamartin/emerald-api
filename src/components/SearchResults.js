import React from 'react';
import { connect } from 'react-redux';
import { getlistings } from '../actions/index';
import Listing from './Listing';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getlistings();
  }

  render() {
    return <div>{this.props.listings.map((listing) => <Listing listing={listing} key={listing.id} />)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    listings: state.listings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getlistings }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
