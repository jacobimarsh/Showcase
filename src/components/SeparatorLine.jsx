import React from "react";

const SeparatorLine = () => {
  return (
    <>
      {/* Vertical line for wide screens */}
      <div className="block max-[1340px]:hidden absolute left-0 top-0 h-full w-[1px] border-l border-[#3e3c38]" />
      {/* Horizontal line for narrow screens */}
      <div className="hidden max-[1340px]:block w-full h-[1px] border-t border-[#3e3c38] max-[1340px]:py-8" />
    </>
  );
};

export default SeparatorLine;
