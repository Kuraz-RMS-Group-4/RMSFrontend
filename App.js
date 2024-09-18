import React, { useState } from 'react';

function MenuDetails() {
  const [isVisible, setIsVisible] = useState(true);

  const mockData = {
    image: "https://th.bing.com/th/id/OIP.d_YzL5iaa66seM5luZJIdAHaFj?rs=1&pid=ImgDetMain", 
    title: 'Nuggets Recipe',
    description: 'Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised.',
    portions: [
      { size: 'Large', price: 400.00 },
      { size: 'Medium', price: 400.00 },
    ],
    extras: [
      { name: 'Cheese', price: 5.00 },
      { name: 'Sauce', price: 3.00 },
    ],
    reviews: [
      { comment: 'A great restaurant! It is like a vacation; it transports you and becomes a lot more than just about the food.', rating: 5, author: 'Blanche Hanrit' },
      { comment: 'The food is amazing, great deeds and all great thoughts.', rating: 4, author: 'Blanche Hanrit' },
    ],
  };

  const [selectedPortion, setSelectedPortion] = useState('');
  const [selectedExtras, setSelectedExtras] = useState([]);

  const handleExtraChange = (event) => {
    const { value, checked } = event.target;
    setSelectedExtras(prevExtras =>
      checked ? [...prevExtras, value] : prevExtras.filter(extra => extra !== value)
    );
  };

  return (
    <div className="container mx-auto my-10 w-[900px] p-4 bg-white shadow-md rounded-lg">
  
      <button className="items-black  text-xl flex ml-96 items-center" onClick={() => setIsVisible(false)}>✖</button>
      
      
      <img src={mockData.image} alt="Food" className="w-full h-[500px] rounded-lg my-4" />

      <h3 className="text-2xl font-semibold text-center text-gray-900">{mockData.title}</h3>
      <p className="text-gray-600  mt-3">{mockData.description}</p>

      <div className="flex ">
      
      <button className="bg-pink-500   text-white w-28 x-4 items-end py-2 mt-10 ml-auto rounded-lg">Catagory me</button>
        
      </div>

      <div className="border-t pt-3 border-r-2  border-l-2 border-b-2 mt-4 pl-4 h-32">
        <h4 className="text-3xl font-semibold pl-2  mb-2">Portion Selection</h4>
        {mockData.portions.map((portion, index) => (
          <label key={index} className="flex items-center  ">
            <div className="flex relative  items-center">
            <input
              type="radio"
              name="portion"
              value={portion.size}
              checked={selectedPortion === portion.size}
              onChange={() => setSelectedPortion(portion.size)}
              className="mr-2 text-2xl"
            />
            {portion.size} 
           </div>- 
           <span className="text-red-500 ml-auto pr-11 text-right"> {portion.price.toFixed(2)}</span>
          </label>
        ))}
      </div>

      <div className="border-t  font-semibold  border-r-2  border-l-2 h-32 border-b-2 pt-3 pl-4 mt-24">
        <h4 className="text-2xl font-semibold mb-2">Extra</h4>
        {mockData.extras.map((extra, index) => (
          <label key={index} className="flex items-center ">
            <div>
            <input
              type="checkbox"
              value={extra.name}
              checked={selectedExtras.includes(extra.name)}
              onChange={handleExtraChange}
              className="mr-2 text-2xl"
            />
            {extra.name}
            </div>
             <span className="text-red-500 ml-auto pr-11 text-right">{extra.price.toFixed(2)}</span>
          </label>
        ))}
      </div>

      
      <div className="my-6 text-center">
        <button className="bg-pink-500 text-white w-28 px-4 py-2 rounded-lg">Submit</button>
      </div>

      
      <div className=" pt-3 mt-4">
        <h4 className="text-lg font-semibold mb-4">Review</h4>
        {mockData.reviews.map((review, index) => (
          <div key={index} className="flex items-center border-r-2 border-t border-yellow-400 border-l-2 h-32 border-b-2 justify-between p-3  bg-gray-50 rounded-lg mb-3">
            <div>
              <p>{review.comment}</p>
              <p className="text-sm text-gray-500">{review.author}</p>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐ {review.rating}</span>
              <span className="bg-yellow-500 w-5 h-5 rounded-full"></span>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex justify-between mt-6">
        <button className="bg-red-500 text-white px-4 w-28 py-2 rounded-lg">Delete</button>
        <button className="bg-yellow-500 text-white px-4 py-2 w-28 rounded-lg">Edit</button>
      </div>
    </div>
  );
}

export default MenuDetails;

