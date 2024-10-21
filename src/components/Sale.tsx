import Image from "next/image";

function Sale() {
    return (
        <main>
            <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10 mb-10">
                <div className="sm:w-full md:w-full lg:w-[80%] h-full">
                    {/* Top Side */}
                    <div className="sm:pl-5 md:pl-0">
                        <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">Today&apos;s</span>
                        <h2 className="text-4xl font-bold mt-5">Flash Sales</h2>
                    </div>
                    {/* Products */}
                    <div className="flex flex-wrap sm:flex-col md:flex-row sm:items-center justify-between mt-7 sm:gap-y-5 md:gap-y-0">
                        {[
                            { src: "/freesh/gaming.png", title: "HAVIT HV-G92 Gamepad", price: "$120" },
                            { src: "/freesh/chair.png", title: "S-Series Comfort Chair", price: "$120" },
                            { src: "/freesh/keyboard.png", title: "AK-900 Wired Keyboard", price: "$120" },
                            { src: "/freesh/lcd.png", title: "IPS LCD Gaming Monitor", price: "$120" },
                        ].map((product, index) => (
                            <div key={index} className="w-full max-w-[200px] h-[170px] bg-gray-200 flex flex-col items-center mb-5">
                                <div className="flex justify-center items-center h-full">
                                    <Image src={product.src} width={150} height={100} alt={product.title} />
                                </div>
                                {/* Title */}
                                <div className="flex flex-col items-center">
                                    <span className="font-bold">{product.title}</span>
                                    <span className="font-bold">{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="py-2 px-3 bg-red-500 rounded-md text-white">View All Products</button>
            </div>
        </main>
    );
}
export default Sale;
