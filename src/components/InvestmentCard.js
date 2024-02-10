// src/InvestmentCard.js
import React from 'react';

const InvestmentCard = ({ investment }) => {
  // Add more props as needed for additional details
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <img className="h-12 w-12" src={investment.logo} alt="Logo" />
        <div className="flex-1">
          <h3 className="text-lg font-bold">{investment.title}</h3>
          <p>{investment.amount}</p>
          {/* Display additional details */}
          <p>More details about the investment opportunity...</p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
