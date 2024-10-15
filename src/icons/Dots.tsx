import React from "react";

const Dots: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_303_2308"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={5}
      width={14}
      height={4}
    >
      <path
        d="M3.5 7C3.5 7.72487 2.91237 8.3125 2.1875 8.3125C1.46263 8.3125 0.875 7.72487 0.875 7C0.875 6.27513 1.46263 5.6875 2.1875 5.6875C2.91237 5.6875 3.5 6.27513 3.5 7Z"
        fill="#000001"
      />
      <path
        d="M8.3125 7C8.3125 7.72487 7.72487 8.3125 7 8.3125C6.27513 8.3125 5.6875 7.72487 5.6875 7C5.6875 6.27513 6.27513 5.6875 7 5.6875C7.72487 5.6875 8.3125 6.27513 8.3125 7Z"
        fill="#000001"
      />
      <path
        d="M11.8125 8.3125C12.5374 8.3125 13.125 7.72487 13.125 7C13.125 6.27513 12.5374 5.6875 11.8125 5.6875C11.0876 5.6875 10.5 6.27513 10.5 7C10.5 7.72487 11.0876 8.3125 11.8125 8.3125Z"
        fill="#000001"
      />
    </mask>
    <g mask="url(#mask0_303_2308)">
      <rect width={14} height={14} fill="#131619" />
    </g>
  </svg>
);

export default Dots;
