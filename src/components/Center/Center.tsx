import * as React from "react";
import "./Center.css";

const Center: React.FunctionComponent<{}> = (props) => {
  return <div className="center">{props.children}</div>;
};

export default Center;
