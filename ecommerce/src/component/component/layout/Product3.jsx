import Heart from "../../../assets/icons/Heart.svg";
import Eye from "../../../assets/icons/Eye.svg";

const Product3 = ({ name, discount, price, rating, image, disprc }) => {
  return (
    <div className="w-full max-w-[270px] h-auto flex flex-col gap-3 mt-5">
      {/* Product Image + Icons */}
      <div className="relative h-[250px] w-full rounded-[6px] group overflow-hidden bg-[#F5F5F5]">
        {/* Discount & Action Icons */}
        <div className="flex justify-between w-full px-4 pt-2">
          <div className="w-[56px] h-[26px] text-center rounded-[4px] bg-[#DB4444] flex items-center justify-center">
            <span className="text-[14px] text-white">-{discount}</span>
          </div>

          <div className="flex flex-col gap-2">
            <img
              src={Heart}
              className="h-[34px] w-[34px] shadow-sm shadow-black/30 rounded-full object-contain"
              alt="Heart"
            />
            <img
              src={Eye}
              className="h-[34px] w-[34px] shadow-sm shadow-black/30 rounded-full object-contain"
              alt="Eye"
            />
          </div>
        </div>

        {/* Product Image */}
        <div className="flex justify-center items-center h-[150px]  relative bottom-5 ">
          <img
            src={image}
            alt={name}
            className="w-[172px] h-[152px] object-contain"
          />
        </div>

        {/* Add to Cart hover */}
        <span className="w-full cursor-pointer z-50 h-[38px] absolute p-2 group-hover:opacity-100 group-hover:translate-y-0 bottom-0 left-0 right-0 transition-all duration-300 opacity-0 text-white translate-y-4 group-hover:bg-black text-center">
          Add to Cart
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2">
        <span className="text-black text-[16px] font-semibold">{name}</span>

        <div className="flex flex-row gap-2 items-center">
          <span className="text-[#DB4444] text-[16px] font-semibold">
            ${price}
          </span>
          <span className="font-semibold text-gray-400 line-through">
            ${disprc}
          </span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <span className="text-yellow-400 text-xl">★★★★★</span>
          <span className="font-semibold text-gray-400">({rating})</span>
        </div>
      </div>
    </div>
  );
};

export default Product3;
