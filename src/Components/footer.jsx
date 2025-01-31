

const Footer = () => {
  
    return (
    <div className='mt-20 border-t-2 h-[300px] border-black pt-1  '>
        <div className='flex justify-between w-full h-full '>
            <div className='w-1/4 h-full'>
                <img src = "footerleft.png" className='object-fit w-full h-full'/>
            </div>

            <div className='w-full h-full '>
                <div className='flex flex-col h-full w-full justify-between'> 
                    
                <div className='flex justify-between  h-full '>
                    <div className='bg-red h-[180px]  p-3 w-full mx-5 rounded-lg mt-8  py-10  flex justify-center items-center '>
                        <div className='text-white text-center w-full font-nunito text-lg font-bold '>
                        <p>Tuesday-Sunday 12:00pm-23:00pm</p>
                        <p>closed on Monday</p>
                        <p>call us</p>
                        <div className='flex flex-wrap justify-between p-2 gap-3'>

                        <p>2517897478</p>
                        <p>2519087865</p>
                        <p>2517897478</p>
                        <p>2519087865</p>
                        </div>
                        
                            </div>
                    </div>

                    {/* {category && (
                    <div className='flex flex-col'>

                    <p>Categories</p>
                    {category.map((item)=>{
                        <p key = {item.category_id}>{item.category_name}</p>
                    })}
                 

                </div>
                )}   */}
                </div>
                <div className='border-t-4  border-yellow mt-7 flex w-full justify-between py-3'>
                    <p className='font-fredoka text-red '>@2024 pizza hut</p>
                    <p className='font-fredoka text-black'>Facebook</p>                </div>
                      </div>
                
            </div>


        <div className='w-1/4 flex justify-end h-full'>
            <img src="footerleft.png" className='h-full w-full'/>
        </div>

        </div>
      
    </div>
  )
}

export default Footer;



