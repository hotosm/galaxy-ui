import React from "react";

export function Button ({ children, onClick }) {
    return (
        <button class="bg-red text-white py-2 px-4" onClick={onClick}>
            {children}
        </button>
    )
}; 
