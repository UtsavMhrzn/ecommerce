function Service() {
  return (
    <div className="w-full mt-30 px-4 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
        {/* Block 1 */}
        <div className="w-full max-w-[269px] h-[200px] flex flex-col items-center text-center gap-2">
          <div className="h-[110px] w-[110px] rounded-full bg-black relative border-[15px] p-3 border-[#e4e4e0] flex justify-center items-center">
            <img src="/Assets/Serve1.png" className="h-[55px] w-[55px] object-contain" />
          </div>
          <span className="text-[20px] font-semibold mt-4">FREE AND FAST DELIVERY</span>
          <span className="text-[14px] font-medium">Free delivery for all orders over $140</span>
        </div>

        {/* Block 2 */}
        <div className="w-full max-w-[269px] h-[200px] flex flex-col items-center text-center gap-2">
          <div className="h-[110px] w-[110px] rounded-full bg-black relative border-[15px] p-3 border-[#e4e4e0] flex justify-center items-center">
            <img src="/Assets/Serve2.png" className="h-[55px] w-[55px] object-contain" />
          </div>
          <span className="text-[20px] font-semibold mt-4">24/7 CUSTOMER SERVICE</span>
          <span className="text-[14px] font-medium">Friendly 24/7 customer support</span>
        </div>

        {/* Block 3 */}
        <div className="w-full max-w-[269px] h-[200px] flex flex-col items-center text-center gap-2">
          <div className="h-[110px] w-[110px] rounded-full bg-black relative border-[15px] p-3 border-[#e4e4e0] flex justify-center items-center">
            <img src="/Assets/Serve3.png" className="h-[55px] w-[55px] object-contain" />
          </div>
          <span className="text-[20px] font-semibold mt-4">MONEY BACK GUARANTEE</span>
          <span className="text-[14px] font-medium">We return money within 30 days</span>
        </div>
      </div>
    </div>
  );
}

export default Service;
