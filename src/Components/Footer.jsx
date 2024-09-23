import img11 from "../assets/Images/img11.png";
import img12 from "../assets/Images/img12.png";

const Footer = () => {
  return (
    <div className="max-w-7xl h-[434px]  px-2 sm:px-4 lg:px-4 text-center bg-white">
      <hr className="bg-yellow-400 h-1 " />

      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 h-full">
        
      
        <div className="flex justify-start">
          <img
            src={img11}
            alt="Left Logo"
            className="w-[211px] h-[434px]" 
          />
        </div>
        <div className="flex justify-center items-center ">
          <div className="bg-red-500 text-white py-16 px-2 rounded-lg text-xs lg:text-base">
            <h1>Tuesday – Saturday: 12:00pm – 11:00pm</h1>
            <h1>Closed on Sunday</h1>
          </div>
        </div>

    
        <div className="flex justify-around items-center ">
          <div>
            <h1 className="font-bold mb-2">About</h1>
            <ul>
              <li>Fredoka One</li>
              <li>Special Dish</li>
              <li>Special Dish</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold mb-2">Menu</h1>
            <ul>
              <li>Steaks</li>
              <li>Burgers</li>
              <li>Cocktails</li>
              <li>Barbecue</li>
              <li>Desserts</li>
            </ul>
          </div>
        </div>

     
        <div className="flex justify-end mt-4 sm:mt-0">
          <img
            src={img12}
            alt=""
            className="w-[170px] h-[434px]"  
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
