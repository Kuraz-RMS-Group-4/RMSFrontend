import img10 from "../assets/Images/img10.png";

const FindUs = () => {
  return (
    <div className="py-3 mt-8 mx-2">
      <div className="mx-20 px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl font-semibold">Come Find Us</h2>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={img10}
          alt="Restaurant Location Map"
          className="w-[80%] rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default FindUs;
