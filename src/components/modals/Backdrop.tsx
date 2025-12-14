"use client";

import React from "react";

interface clickProp {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Backdrop = ({ onClick }: clickProp) => {
  return (
    <div
      onClick={onClick}
      className="fixed overflow-hidden backdrop top-0 left-0 w-full h-screen z-[9999] s no-scroller"
    ></div>
  );
};

export default Backdrop;
