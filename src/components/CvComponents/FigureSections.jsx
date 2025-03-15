import React from "react";

export const FigureSection = ({ figure, description, style }) => {
    return (
      <>
        <div 
          className="flex items-center justify-center flex-row max-[1340px]:flex-col" 
          style={style}
        > 
          <div>{figure}</div>
          <div className="max-[1340px]:ml-[95px]">
            {React.cloneElement(description, { reverse: false })}
          </div>
        </div>
        <div className="relative flex items-center w-full">
          <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted ml-7"></div>
          <img 
            src="../local_images/helix_leaves.svg" 
            className="w-[100px] mx-2 p-5"
          />
          <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted mr-7"></div>
        </div>
      </>
    );
  };
  
  export const FigureSectionReverse = ({ figure, description, style }) => {
    return (
      <>
        <div 
          className="flex items-center justify-center flex-row max-[1340px]:flex-col-reverse"
          style={style}
        > 
          <div className="max-[1340px]:ml-[95px]">
            {React.cloneElement(description, { reverse: true })}
          </div>
          <div>{figure}</div>
        </div>
        <div className="relative flex items-center w-full">
          <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted ml-7"></div>
          <img 
            src="../local_images/helix_leaves.svg" 
            className="w-[100px] mx-2 p-5"
          />
          <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted mr-7"></div>
        </div>
      </>
    );
  };