import * as React from 'react';
import "./Button.css";

interface ButtonProps {
  variant: string;
  backgroundColor: string;
  size: string;
  text: string;
}

export default function Button({
  variant,
  backgroundColor,
  size,
  text,
}: ButtonProps, ...rest: any) {
  return (
    <button
      className={["button", `button--${variant}`, `button--${size}`].join(" ")}
      style={{ backgroundColor }}
      {...rest}
    >
      {text}
    </button>
  );
}