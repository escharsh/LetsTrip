
import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card dark:shadow-card-dark">
      {children}
    </div>
  );
};

export default Card;