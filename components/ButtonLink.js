import React from 'react';
import Link from "next/link"
const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size, href }) => {
  if (!href) {
    console.error("Missing href in the ButtonLink element.")
  }
  return (
    <Link
      href={href}
      type="button"
    >
      <a
        className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
    `}>
        {children}
      </a>
    </Link>
  );
};

export default Button;
