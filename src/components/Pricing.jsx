import React from "react";

const Pricing = () => {
  return (
    <div className=" w-[100%]  mt-12 lg:mt-24 bg-pricing">
      <div className="flex flex-row w-[80%] lg:w-[90%] mx-auto py-24 px-0 md:px-24">
        <div className="flex flex-col justify-center text-center px-6 lg:px-5 border-r-[1px] border-white-100 ">
          <h2 className="font-tetiary font-medium text-white text-[25px] lg:text-[50px]">
            {" "}
            N70,000 / 70usd
          </h2>
          <p className="font-primary text-white text-[12px]">Course Price</p>
        </div>
        <div className="flex flex-col justify-center text-center px-6 lg:px-5">
          <h2 className="font-tetiary font-medium text-white text-[25px] lg:text-[50px]">
            {" "}
            N20,000 / 20usd
          </h2>
          <p className="font-primary text-white text-[12px]">
            Discounted Price
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
