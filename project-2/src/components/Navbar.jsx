import React from "react";
import Button from "./Button"
const Navbar = () => {
  return (
    <>
      <div className="border-b-1 border-zinc-600 flex items-center justify-between max-w-screen-xl mx-auto relative  h-[80px] ">
<div className="flex items-center">
        <img
          className="h-[79px] w-[200px] "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRE0XY1plDOy9tBwdgSiSWGOK8A9_dM68hbMzUoUnvxg&s=10"
          alt=""
        />
        
        <div className="links flex gap-14 ml-10 relative">
          {["Home", "Work", "Culture","","News"].map((elem, index) => {
            return (
              <a key={index} className="text-sm text-white" href="">
                {index === 1 ? (
                  <span key={index} style={{boxShadow:"0 0 0.45em #00FF19"}} className="inline-block h-[4px] w-[4px] rounded bg-green-400 "></span>
                ) : null}
                {elem.length===0?<span className="inline-block w-[2px] h-[22px] bg-zinc-600"></span>:null}
                {elem}
              </a>
            );
          })}
        </div>
      </div>
         <Button />

      </div>
    </>
  );
};

export default Navbar;
