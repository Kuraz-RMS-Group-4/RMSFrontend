import React from 'react';

function DeleteConfirmation() {
  const mockData = {
    image: "https://th.bing.com/th/id/OIP.d_YzL5iaa66seM5luZJIdAHaFj?rs=1&pid=ImgDetMain", 
    title: 'Roasted Corn',
    description: 'It contains 10 menus. If you delete it, the menus will also be deleted unless you assign them to another category.',
  };

  return (
    <div className="container mx-auto my-10 w-[900px] p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-black text-2xl flex ml-60 font-semibold   items-center">Are You Sure You Want To Delete This?</h2>
      <img src={mockData.image} alt="Food" className="w-full h-[500px] rounded-lg my-4" />
      <h3 className="text-2xl font-semibold text-center text-gray-900">{mockData.title}</h3>
      <p className="text-red-600 mt-3">{mockData.description}</p>

      <div className="flex justify-between mt-6">
        <button className="bg-red-500 text-white px-4 w-28 py-2 ml-14 rounded-lg">Cancel</button>
        <button className="bg-yellow-500 text-white px-4 py-2 w-28 mr-14 rounded-lg">Delete</button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
