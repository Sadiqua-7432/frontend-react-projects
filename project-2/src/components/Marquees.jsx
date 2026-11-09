import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  const images = [
    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf6938856f07f92f4e2_logo-onDark.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a8cd175358550ad695_deelogo-onDark.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842b14070a2366d8a6bd_jologo-onDark.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b9725938856f07fb24e20_gpoologo-onDark.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ee1fe5ae69e47b6c1c_Lavendar-logo-white.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg",
     
    ],
    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a7f6e278782c11c6370_Keystone-white.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6696b1c44ab856f14a95fc70_Logo-lockup-white.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f104c9b6ce2c0a0d0d13_botify-white.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b7042241_65b2ca2282d921d99755eaf6_Logo%2520White%25201.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5b40b9966a3a112d7_663a6cbf194837f9c0affe8e_logo.svg",
     
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e95_63aed9589c2695a8bfaa920e_yahoo.svg",
     
    ],
  ];
  return (
    <div className="py-5 mt-52">
      {images.map((item,index)=><Marquee key={index} imgUrl={item} />)}
    </div>
  );
};

export default Marquees;
