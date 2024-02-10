// src/InvestmentDetails.js
import React from 'react';

const InvestmentDetails = ({ investment, onClose, onBuy, onSell }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 px-4 py-6">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-2xl font-semibold"
        >
          &times;
        </button>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{investment.title}</h2>
        <img className="w-20 h-20 sm:w-32 sm:h-32 mb-2 sm:mb-4" src={investment.logo} alt="Investment Logo" />
        <p className="mb-1 sm:mb-2">Description: {investment.description}</p>
        <p className="mb-1 sm:mb-2">Investment Amount: {investment.amount}</p>
        <p className="mb-1 sm:mb-2">Terms: {investment.terms}</p>
        <p className="mb-1 sm:mb-2">Risk Factors: {investment.riskFactors}</p>
        <p className="mb-1 sm:mb-2">How to Invest: {investment.howToInvest}</p>
        <p className="mb-2 sm:mb-4">Other Information: {investment.otherInfo}</p>
        <div className="flex flex-col sm:flex-row sm:justify-around space-y-2 sm:space-y-0 sm:space-x-2">
          <button onClick={onBuy} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Buy
          </button>
          <button onClick={onSell} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
