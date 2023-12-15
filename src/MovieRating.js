import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

function MovieRating() {

  const [rating, setRating] = useState(0);

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  return (
    <div style={{ padding: '10px', textAlign: 'center' }}>

      <h4>Rating: {rating}</h4>
      <StarRatingComponent
        name="star-rating"
        value={rating}
        onStarClick={onStarClick}
      />
    </div>
  );
}

export default MovieRating;