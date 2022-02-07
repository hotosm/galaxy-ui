import React from "react";

export function Button({ children, onClick, styles }) {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export function SubmitButton({ children, styles }) {
  return (
    <button
      type="submit"
      aria-pressed="false"
      focusindex="0"
      className={styles}
    >
      {children}
    </button>
  );
}
