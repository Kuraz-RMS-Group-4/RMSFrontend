import { createSlice } from '@reduxjs/toolkit';

// Mock data for demonstration
const initialState = {
  orders: {
    tableNumber: 'Table One',
    orderTime: '8:30',
    deliveryTime: '9:30',
    waiter: 'waiter name',
    date: '09/08/2024',
    total: 2000,
    status: 'Being Prepared',
    items: [
      { id: 1, name: 'Nuggets Recipe', price: 18, discountedPrice: 12.50, image: 'https://th.bing.com/th/id/OIP.vM3rkFirqy92148BzAIBZwHaEK?rs=1&pid=ImgDetMain' },
      { id: 2, name: 'Nuggets Recipe', price: 18, discountedPrice: 12.50, image: 'https://th.bing.com/th/id/OIP.vM3rkFirqy92148BzAIBZwHaEK?rs=1&pid=ImgDetMain' },
      { id: 3, name: 'Nuggets Recipe', price: 18, discountedPrice: 12.50, image: 'https://th.bing.com/th/id/OIP.vM3rkFirqy92148BzAIBZwHaEK?rs=1&pid=ImgDetMain' },
      { id: 4, name: 'Nuggets Recipe', price: 18, discountedPrice: 12.50, image: 'https://th.bing.com/th/id/OIP.vM3rkFirqy92148BzAIBZwHaEK?rs=1&pid=ImgDetMain' },
    ],
  },
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
