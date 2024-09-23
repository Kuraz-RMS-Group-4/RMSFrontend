const Welcome = () => {
    return (
      <div className="bg-white mb-2 mt-4 py-8">
        <div className="max-w-7xl  px-4 sm:px-4 lg:px-3 text-center">
       
          <h1 className="text-4xl font-bold">
            <span className="text-red-500">Welcome to </span>
            <span className="text-yellow-500">Pizza Hut</span>
          </h1>
  
          {/* Paragraph */}
          <p className="mt-4 text-gray-700 text-lg sm:text-xl lg:text-2xl  mx-auto">
            At Pizza Hut, we believe that every meal should be an unforgettable experience. Located in the heart of 
            <span className="font-semibold"> [City/Location]</span>, our restaurant is built on the love of fresh, flavorful ingredients and the joy of bringing people together through delicious food.
          </p>
        </div>
      </div>
    );
  };
  
  export default Welcome;