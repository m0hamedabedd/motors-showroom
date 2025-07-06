import React from 'react';

export const Logo = ({ className = "h-10 w-auto", ...props }) => (
  <img src="/logo.png" alt="Motors Showroom Logo" className={className} {...props} />
);
