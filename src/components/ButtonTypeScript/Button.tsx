import * as React from "react";
import "./Button.css";

export interface ButtonProps {
  variant: string;
  backgroundColor: string;
  size: string;
  children?: React.ReactNode;
}

export function Button(
  { variant, backgroundColor, size, children }: ButtonProps,
  ...rest: any
) {
  return (
    <button
      className={["button", `button--${variant}`, `button--${size}`].join(" ")}
      style={{ backgroundColor }}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Btn(btnProps: ButtonProps, ...args: any): JSX.Element {
  const { variant, backgroundColor, size, children } = btnProps;

  return (
    <button
      className={["button", `button--${variant}`, `button--${size}`].join(" ")}
      style={{ backgroundColor }}
      {...args}
    >
      {children}
    </button>
  );
}
