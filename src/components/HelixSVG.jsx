const DoubleHelixWithLeaves = () => (
    <svg
      width="200"
      height="300"
      viewBox="0 0 200 300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="green"
      strokeWidth="4"
      strokeLinecap="round"
    >
      {/* Left-to-right double helix */}
      <path
        d="M50 280 C 90 240, 90 180, 50 140 
           S 10 60, 50 20"
        stroke="blue"
      />
      <path
        d="M150 280 C 110 240, 110 180, 150 140 
           S 190 60, 150 20"
        stroke="blue"
      />
      {/* Connecting lines */}
      {[40, 80, 120, 160, 200, 240].map((y) => (
        <line key={y} x1="50" y1={y} x2="150" y2={280 - y} stroke="blue" />
      ))}
      {/* Leaves */}
      <path
        d="M70 100 Q 50 50, 80 20"
        fill="lightgreen"
        stroke="green"
      />
      <path
        d="M130 200 Q 150 250, 120 280"
        fill="lightgreen"
        stroke="green"
      />
    </svg>
  );
  
  export default DoubleHelixWithLeaves;
  