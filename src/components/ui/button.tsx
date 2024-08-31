import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`${className} rounded-full bg-blue-500 px-10 py-3 font-medium`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
