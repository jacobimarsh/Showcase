import React from "react";

// Vertical Separator Component
const VerticalSeparator = ({ reverse }) => (
  <div 
    className={`block max-[1340px]:hidden absolute top-1/2 transform -translate-y-1/2 h-[90%] w-[1px] border-l border-[#3e3c38] 
      ${reverse ? "right-[-6px]" : "left-[-3px]"}`}
  />
);

// Horizontal Separator Component that is hidden on wide screens
const HorizontalSeparator = () => (
  <div className="w-full p-2 min-[1340px]:hidden">
    <div className="w-full h-[1px] border-t border-[#3e3c38]" />
  </div>
);

const AlwaysHorizontalSeparator = () => (
  <div className="w-full p-2">
    <div className="w-full h-[1px] border-t border-[#3e3c38]" />
  </div>
);

// Description Component
const Description = ({ title, author, text, reverse = false, narrow = false }) => {
  return (
    <div className="relative p-4 flex flex-col items-center justify-center text-center max-w-[900px] mx-auto">
      {/* Show Vertical Separator only if narrow is false */}
      {!narrow && <VerticalSeparator reverse={reverse} />}
      
      {/* Show Horizontal Separator always if narrow is true */}
      {!narrow && <HorizontalSeparator />}

      {narrow && <AlwaysHorizontalSeparator />}


      <div className="relative z-10">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-5 mb-2"> {text}</p>
        <h3>{author}</h3>
      </div>
    </div>
  );
};

export default Description;
