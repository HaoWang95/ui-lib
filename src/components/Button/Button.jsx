import React from "react";
import './Button.css';
/**
 *
 * @param {*} props
 * @returns Button component
 */
export default function Button(props) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}
