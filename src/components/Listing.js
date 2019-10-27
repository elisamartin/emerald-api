import React from 'react';
import { connect } from 'react-redux';

const Listing = ({ listing }) => {
  return (
    <div>
      <div className='listing-img' />
      <div className='listing-text'>
        <p>{listing.title}</p>
        <p>{listing.city}</p>
        <p>
          Up to {listing.max_adults} guests, {listing.number_of_bedrooms} bedrooms
        </p>
        <p>from {listing.property_price}/night</p>
      </div>
    </div>
  );
};

export default connect()(Listing);
