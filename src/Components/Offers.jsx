
import img7 from "../assets/Images/img7.png";
import img8 from "../assets/Images/img8.png";
import img9 from "../assets/Images/img9.png";
const Offers = ()=> {
    return (
        <div className="py-3 mt-8 mx-2">
  <div className="max-h-[490px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
    <h2 className="text-3xl  font-semibold">We Offer</h2>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto">
    <div className="relative">
      <img
        src={img7}
        alt="Delicious Desserts"
        className="rounded-md w-[80%] mx-auto"
      />
      <h3 className="absolute bottom-11 left-0 right-0 text-white text-2xl font-bold p-4 rounded-b-md text-center">
        Delicious Desserts
      </h3>
    </div>

    <div className="relative pt-12">
      <img
        src={img8}
        alt="Seasonal Specials"
        className="rounded-md  w-[80%] mx-auto"
      />
      <h3 className="absolute bottom-3 left-0 right-0 text-white text-2xl font-bold p-4 rounded-b-md text-center">
        Seasonal Specials
      </h3>
    </div>

    <div className="relative">
      <img
        src={img9}
        alt="Vegetarian and Vegan Options"
        className="rounded-md w-[80%]  mx-auto"
      />
      <span className="absolute bottom-11 left-4 right-4  text-white text-xl md:text-2xl font-bold p-4 rounded-b-md text-center">
        Vegetarian and Vegan Options
      </span>
    </div>
  </div>
</div>

    );
}

export default Offers;