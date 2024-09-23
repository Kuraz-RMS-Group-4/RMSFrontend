import img1 from "../assets/Images/img1.png";
import img2 from "../assets/Images/img2.png";
import img3 from "../assets/Images/img3.png";
import img4 from "../assets/Images/img4.png";
import img5 from "../assets/Images/img5.png";
import img6 from "../assets/Images/img6.png";

const Gallery=()=> {
    return (
        <div className="bg-white  ">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="flex">
            <div className="mr-4">
                <img src={img1} alt="" /></div>
            <div className="mr-4 ">
                <img src={img2} className=" mb-3 sm:mb-7" alt="" />
               <img src={img3}  className="mb-3 sm:mb-6" alt="" />
               <img src={img4} alt="" />
            </div>
            <div>
                <img src={img5} className="mb-3 sm:mb-8" alt="" />
                <img src={img6}  alt="" />
            </div>
           </div>
           </div>
        </div>
    );
}

export default Gallery;