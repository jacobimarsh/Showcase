import React from "react";

const Description = () => {
  return (
    <div className="relative p-4 flex flex-col items-center justify-center w-[95%] text-center max-w-[650px]">
      {/* Vertical separator for wide screens, centered vertically and 80% tall */}
      <div className="block max-[1340px]:hidden absolute left-[-3px] top-1/2 transform -translate-y-1/2 h-[90%] w-[1px] border-l border-[#3e3c38]" />
      {/* Horizontal separator for narrow screens with extra vertical padding */}
      <div className="hidden max-[1340px]:block w-full py-2">
        <div className="w-full h-[1px] border-t border-[#3e3c38]" />
      </div>
      <div className="relative z-10">
        <h2 className="text-xl font-bold">
          Figure 4. Selective sweep dynamics for simulated populations with rescaling
        </h2>
        <h3 className="my-5">[Marsh, Kaushik and Johri 2025]</h3>
        <p>
          Interactive plot of nucleotide diversity observed for 100 bp bins in a strictly neutral region as a function of distance from a single moderately strong beneficial mutation of strength <em>2Ns</em> = 100 that reaches fixation from simulations with different scaling factors. The line represents the expected diversity calculated post-fixation (see Eq. 6).
        </p>
      </div>
    </div>
  );
};

export default Description;
