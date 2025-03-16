import React from "react";

const Description = ({ title, author, text, reverse = false, narrow = false }) => {

    const VerticalSeparator = () => (
          <div className={`block max-[1340px]:hidden absolute top-1/2 transform -translate-y-1/2 h-[90%] w-[1px] border-l border-[#3e3c38] 
          ${reverse ? "right-[-6px]" : "left-[-3px]"}`}>
          </div>)

    const HorizontalSeparator = () => (
      <div className="hidden max-[1340px]:block w-full py-2">
        <div className="w-full h-[1px] border-t border-[#3e3c38]" />
      </div>)



  return (
    <div className="relative p-4 flex flex-col items-center justify-center w-[95%] text-center max-w-[900px]">
      {/* Vertical separator for wide screens, positioned and shifted based on `reverse` */}
      <VerticalSeparator />
      
      {/* Horizontal separator for narrow screens with extra vertical padding */}
      <HorizontalSeparator />

      <div className="relative z-10">
        <h2 className="text-xl font-bold">
          {title}
        </h2>
        <h3 className="my-5">{author}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Description;
