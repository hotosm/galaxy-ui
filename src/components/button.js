import React from "react";

export function Button ({ children, onClick, styles }) {
  const customStyle = styles ? `bg-red text-white ${styles}`: "bg-red text-white py-2 px-4"
  return (
    <button className={customStyle} onClick={onClick}>
      {children}
    </button>
  )
}; 

export function SubmitButton({ children, styles}) {
  const customStyle = styles ? `bg-red text-white ${styles}`: "bg-red text-white py-2 px-4"
  return (
    <button
      type="submit"
      aria-pressed="false"
      focusindex="0"
      className={customStyle}
    >
      {children}
    </button>
  );
}
  