import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-8 flex justify-between gap-16">
        <div className="">
          <h1 className="text-[10vw] font-semibold mr-2">refokus.</h1>
          <div className="flex gap-10 text-sm text-zinc-400">
            <h1>footer1</h1>
            <h1>footer2</h1>
            <h1>footer3</h1>
            <h1>footer4</h1>
          </div>
        </div>
        <div className=" mt-16 text-zinc-400 text-sm flex flex-col gap-4">
            <h1 className="mb-6">society</h1>
            <h1>instagram</h1>
            <h1>twitter</h1>
            <h1>facebook</h1>
        </div>
        <div className=" mt-16 text-zinc-400 text-sm  flex flex-col gap-4 ">
            <h1 className="mb-6">startup1</h1>
            <h1>startup2</h1>
            <h1>startup3</h1>
            <h1>startup4</h1>
        </div>
        <div className=" mt-16 flex flex-col items-right ">
           <h1 className="text-right "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi dolorem</h1>
            <button className="px-2 py-2 mt-4 bg-purple-800 ">you can't register</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
