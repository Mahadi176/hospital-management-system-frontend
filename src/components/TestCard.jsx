import React from 'react';

const TestCard = ({ test }) => {
    const { name, price, description } = test;
  
  // Format price to currency (basic example)
  const formattedPrice = price ? new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price) : 'N/A';
    return (
       <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{description || 'Standard diagnostic procedure.'}</p>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <span className="text-xl font-bold text-teal-600">
          {formattedPrice}
        </span>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-600 transition">
          Schedule Test
        </button>
      </div>
    </div>
    );
};

export default TestCard;