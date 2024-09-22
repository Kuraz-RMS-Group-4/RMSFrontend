import{ Link } from "react-router-dom";
import {BiUser} from "react-icons/bi";
import {AiOutlineUnlock} from "react-icons/ai";

const Login=() => {
    return (
        <div>
           <div className="bg-white border border-orange-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
              <h1 className="text-4xl text-black font-bold text-center mb-6">Login</h1> 
              <form action="">
                <div className="relative my-4">
                   <input type="tel" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-orange-400 appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600 peer" placeholder=""/>
                   <label htmlFor=" " className="absolute text-sm text-black duration-300 transform translate-y-6 scale-75 top-1 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                   
                </div> 
                <div className="relative my-4">
                   <input type="password"className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-orange-400 appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600 peer" placeholder=""/>
                   <label htmlFor=" " className="absolute text-sm  text-black duration-300 transform translate-y-6 scale-75 top-1 left-0  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">your password</label>
               
                </div>
             <div className="flex justify-between items-center">
               <div className="flex gap-2 items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Remember Me" className="text-black">Remember Me</label>
              </div>
         <Link to='' className="text-blue-500">Forgot Password?</Link>
       </div>
       <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-black border border-orange-400 hover:bg-orange-600 hover:text-black py-2 transition-colors duration-300 " type="submit">Login</button>
        </form>
        <div>
            <span className="m-4 text-black">New Here? <Link className="text-blue-500" to='/Register'> Create an Account</Link></span>
        </div>
       </div>
       </div>
    );
}

export default Login;