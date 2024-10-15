import React from 'react';

const OrderCard = ({ item }) => {
  return (
  
    <div className="p-4 border rounded-lg w-80 shadow-sm bg-white">
      <img src={item.image} alt={item.name} className="rounded-md w-48 h-32 object-cover" />
      <h3 className="mt-2 text-lg font-bold">{item.name}</h3>
      <p className="text-gray-500 line-through">${item.price.toFixed(2)}</p>
      <p className="text-red-600 font-semibold">${item.discountedPrice.toFixed(2)}</p>
    </div>
   
  );
};

export default OrderCard;
