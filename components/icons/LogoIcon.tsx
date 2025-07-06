import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
      fill="#0D2C54"
    />
    <path
      d="M16.5 9.5L12 12L7.5 9.5"
      stroke="#D90429"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12V17"
      stroke="#D90429"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
