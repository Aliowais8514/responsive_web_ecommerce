


import Image from "next/image"


function Products(){
    return(
        
        <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10 mb-20">
             <div className="sm:w-full md:w-full lg:w-[80%] h-full">
                      {/* top side */}
                      <div className="sm:pl-5 md:pl-0">
                       <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">This Month</span>
                     <div className="flex justify-between ">
                     <h2 className="text-4xl font-bold mt-5">Best Selling Products</h2>
                     <button className="sm:hidden md:block px-5 bg-red-500  rounded-md text-white">View All </button>
                     </div>

                      </div>
                      {/* products */}
                    {/* container boxes */}
                    <div className=" flex sm:flex-col md:flex-row sm:items-center  justify-between mt-7 sm:gap-y-5 md:gap-y-0">
                       <div>
                       <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                            <Image src={"/freesh/gaming.png"} width={150} height={100} alt="gaming"></Image>
                        </div>
                            {/* title */}
                            <div className="flex flex-col">
                                <span className=" font-bold pt-3">HAVIT HV-G92 Gamepad</span>
                                <span className="font-bold">$120</span> 
                            </div>
                       </div>
                       <div>
                       <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/freesh/chair.png"} width={150} height={100} alt="gaming"></Image>
                        </div>
                           {/* title */}
                           <div className="flex flex-col">
                                <span className=" font-bold pt-3">S-Series Comfort Chair </span>
                                <span className="font-bold">$120</span> 
                            </div>
                       </div>
                       <div>
                       <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/freesh/keyboard.png"} width={150} height={100} alt="gaming"></Image>
                        </div>
                         {/* title */}
                         <div className="flex flex-col">
                                <span className=" font-bold pt-3">AK-900 Wired Keyboard</span>
                                <span className="font-bold">$120</span> 
                            </div>
                       </div>
                       <div>
                       <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/freesh/lcd.png"} width={150} height={100} alt="gaming"></Image>
                        </div>
                              {/* title */}
                         <div className="flex flex-col">
                                <span className=" font-bold pt-3">IPS LCD Gaming Monitor</span>
                                <span className="font-bold">$120</span> 
                            </div>
                       </div>
                    </div>
                    {/* botton */}
                    <button className="sm:block md:hidden py-2  px-5 bg-red-500 sm:ml-[5%]  rounded-md text-white">View All </button>

             </div>
             
        </div>
       
    )
}
export default Products
