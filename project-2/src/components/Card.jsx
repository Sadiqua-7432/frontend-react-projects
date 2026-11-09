import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Card = ({ width, start, para,head1,head2 }) => {
  return (
    <div className={`hover:bg-purple-900 bg-zinc-700 p-5 rounded-xl ${width}`}>
      <div className="anime hover:ml-2  transition-all ease-in-out duration-300">
        <div className="flex justify-between">
            {head1?"One heading":"2nd heading"}
          
          <FaArrowRight className="text-[10px]" />
        </div>
        
        <h1 className="text-3xl pt-4">
            {head2?"whatever heading 1":"whatever heading 2"}
            </h1>
      </div>
      <div className="down  w-full">
        {start && (
          <>
            <h1 className="text-[6vw] font-semibold tracking-tight leading-none mt-50">
              Start a Project
            </h1>
            <button  className="px-4 hover:bg-black mt-5 py-2 border-1 rounded-full">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-zinc-500 pt-80 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
