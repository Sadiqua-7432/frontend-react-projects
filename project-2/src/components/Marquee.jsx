import React from "react";

const Marquee = ({ imgUrl }) => {
  return (
    <div className="flex w-full overflow-hidden py-8">
      <div className="flex w-max animate-marquee gap-10">
        {/* First set of images */}
        {imgUrl.map((url, index) => (
          <img
            key={`first-${index}`}
            src={url}
            alt=""
            className="w-32 h-24 object-contain flex-shrink-0"
          />
        ))}

        {/* Duplicate set for infinite scrolling */}
        {imgUrl.map((url, index) => (
          <img
            key={`second-${index}`}
            src={url}
            alt=""
            className="w-32 h-24 object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;


// import React from 'react'

// const Marquee = ({imgUrl}) => {
//   return (
//     <div className='flex w-full animate-marquee gap-10 py-8 overflow-hidden whitespace-nowrap'>
//       {imgUrl.map((url,index)=><img key={index} src={url} className='w-32 flex-shrink-0' />)}
//       {imgUrl.map((url,index)=><img key={index} src={url} className='w-32 flex-shrink-0' />)}
// </div>
//   )
// }

// export default Marquee
