import React from 'react';

export const Episode = ({ num, title, guest }) => (
  <div className="episode">
    <h2 className="episode__title">{`Epizoda ${num}: ${title}`}</h2>
    <p className="episode__guest">{`Host: ${guest}`}</p>
  </div>
);

