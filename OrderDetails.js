import React from 'react';
import { useSelector } from 'react-redux';
import OrderCard from './OrderCard';

const OrderDetails = () => {
  const order = useSelector((state) => state.order.orders);

  return (
    <div className="container mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{order.tableNumber}</h2>
          <p>Ordered - {order.orderTime}</p>
          <p>Delivered - {order.deliveryTime}</p>
        </div>
        <div>
          <p>Waiter - {order.waiter}</p>
          <p>{order.date}</p>
        </div>
      </div>
      <div className="  border-4 border-yellow-300 rounded-lg shadow-sm mt-4">
      <div className="grid grid-cols-2 gap-3 pl-8 mt-4">
        {order.items.map((item) => (
          <OrderCard key={item.id} item={item} />
        ))}
      </div>
      <div className="text-end pr-9 pb-9 space-y-4">
        <p className="text-2xl font-bold">ETB {order.total}</p>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
          {order.status}
        </button>
      </div>
      </div>

      
    </div>
  );
};

export default OrderDetails;
