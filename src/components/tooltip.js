import React from "react";
import Popup from "reactjs-popup";

const TooltipCard = ({ content }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-dark text-white p-4">
      <p className="text-base font-light">{content}</p>
    </div>
  );
};

export const Tooltip = ({ content, position, children }) => {
  return (
    <Popup
      trigger={<button className="button">{children}</button>}
      position={position}
      closeOnDocumentClick
      on={["hover"]}
      arrow={position !== "center center"}
    >
      <TooltipCard content={content} />
    </Popup>
  );
};
