import * as React from "react";

interface CenterProps {
  children: JSX.Element;
}

const style = {
  display: "flex",
  "justify-content": "center",
};

const Center: React.FC<CenterProps> = (props: CenterProps) => {
  return (
    <div className="container" style={style}>
      {props.children}
    </div>
  );
};

export default Center;
