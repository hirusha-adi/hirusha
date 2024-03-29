import React from "react";

const BigOChartSVG = () => {
  return (
    <div style={{ maxWidth: "600px", width: "100%", overflow: "hidden" }}>
      <svg
        id="chart-container"
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
      >
        {/* White background box */}
        <rect x="0" y="0" width="800" height="500" fill="white" />

        {/* Existing SVG content */}
        {/* horrible region */}
        <path d="M50 450 L 50 0 L 800 0 L 800 450 Z" fill="#ff8989"></path>
        {/* bad region */}
        <path d="M50 450 L 800 0 L 800 450 Z" fill="#FFC543"></path>
        {/* fair region */}
        <path d="M50 450 L 800 450 L 800 330 Z" fill="yellow"></path>
        {/* good region */}
        <path d="M50 450 L 800 450 L 800 410 Z" fill="#C8EA00"></path>
        {/* excellent region */}
        <path d="M50 450 L 800 450 L 800 440 Z" fill="#53d000"></path>

        {/* axes */}
        <path
          d="M50 0 L 50 450 L 800 450"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
        ></path>

        <path
          d="M50 448 L 800 448"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
        ></path>
        <text x="700" y="438" fill="black">
          O(log n), O(1)
        </text>

        <path
          d="M50 450 L 800 400"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
        ></path>
        <text x="760" y="390" fill="black">
          O(n)
        </text>

        <path
          d="M50 450 Q 400 350, 800 150"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
        ></path>
        <text x="630" y="190" fill="black">
          O(n log n)
        </text>

        <path
          d="M50 450 Q 180 380, 250 0"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
        ></path>
        <text x="260" y="30" fill="black">
          O(n^2)
        </text>

        <path
          d="M50 450 C 100 430, 120 350, 120 0"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
        ></path>
        <text x="125" y="20" fill="black">
          O(2^n)
        </text>

        <path
          d="M50 450 C 80 450, 80 350, 80 0"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
        ></path>
        <text x="80" y="20" fill="black">
          O(n!)
        </text>

        <text
          x="0"
          y="0"
          transform="translate(30 230) rotate(-90)"
          style={{
            dominantBaseline: "middle",
            textAnchor: "middle",
            fontSize: "20px",
            color: "#555",
            fontStyle: "italic",
          }}
          fill="black"
        >
          Operations
        </text>
        <text
          x="0"
          y="0"
          transform="translate(420 470)"
          style={{
            dominantBaseline: "middle",
            textAnchor: "middle",
            fontSize: "20px",
            color: "#555",
            fontStyle: "italic",
          }}
          fill="black"
        >
          Elements
        </text>
      </svg>
    </div>
  );
};

export default BigOChartSVG;
