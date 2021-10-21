import React from "react";

export function Button ({ children, onClick }) {
    return (
        <button className="bg-red text-white py-3 px-10" onClick={onClick}>
            {children}
        </button>
    )
}; 
