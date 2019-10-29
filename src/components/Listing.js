import React from 'react';
import { connect } from 'react-redux';

// Styled Components
import { ListingContainer } from './styles/listing';

const Listing = ({ listing }) => {
  return (
    <ListingContainer>
      <div className='listing-img'>
        <img src={listing.open_graph_image_cache} alt='listing' />
      </div>
      <div className='listing-text'>
        <h2>{listing.title}</h2>
        <h5>{listing.city}</h5>
        <p>
          Up to <b> {listing.max_adults} guests</b>, <b>{listing.number_of_bedrooms}</b> bedrooms
        </p>
        <p>
          from <b>€{listing.property_price}/night</b>
        </p>
      </div>
      <button>BOOK</button>
    </ListingContainer>
  );
};

export default connect()(Listing);
