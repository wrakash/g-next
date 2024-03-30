import React from 'react';

export const StarRating = ({ rating }:{rating:number}) => {
  const maxRating = 5; // Assuming a maximum rating of 5 stars
  const starArray = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      starArray.push(<span key={i}>&#9733;</span>); // Filled star
    } else {
      starArray.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }

  return <div className='text-yellow-500 space-x-1 text-2xl'>{starArray}</div>;
};


