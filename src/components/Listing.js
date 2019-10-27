import React from 'react';
import { connect } from 'react-redux';

const Listing = ({ listing }) => {
  return (
    <div>
      <p>{listing.title}</p>
    </div>
  );
};

export default connect()(Listing);
