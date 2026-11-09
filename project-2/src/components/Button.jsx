import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({title="Get started"}) => {
  return (
    <div className="flex gap-5 font-semibold max-w-35 text-sm bg-zinc-200 px-3  py-2 rounded-full text-black ">
     {title}
      <span className="text-xl">
        <FaArrowRightLong />
      </span>
    </div>
  );
};

export default Button;
