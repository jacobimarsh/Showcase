import React from "react";

const Description = () => {
  return (
    <div className="p-4 border-l border-gray-300 flex flex-col items-center justify-center text-center max-w-[47rem] w-full">
      <h2 className="text-xl font-bold">
        Figure 4. Selective sweep dynamics for simulated populations with rescaling
      </h2>
      <h3 className="my-5">[Marsh, Kaushik and Johri 2025]</h3>
      <p>
        Interactive plot of nucleotide diversity observed for 100 bp bins in a strictly neutral region as a function of distance from a single moderately strong beneficial mutation, <em>2Ns</em> = 100, reaching fixation from simulations with different scaling factors.
      </p>
    </div>
  );
};

export default Description;
