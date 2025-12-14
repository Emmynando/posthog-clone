"use client";

import React, { type FC } from "react";
import ReactDOM from "react-dom";

export interface IPortalProps {
  children: React.ReactNode;
  selector: string;
}

const Portal: FC<IPortalProps> = ({ children, selector }) => {
  const portalRoot = document.querySelector(selector);

  if (!portalRoot || !(portalRoot instanceof Element)) {
    throw new Error(`cannot find root with selector ${selector}`);
  }

  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
