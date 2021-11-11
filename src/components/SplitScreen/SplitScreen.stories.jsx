import React from "react";
import SplitScreen from "./SplitScreen";

const LeftComponent = () => (
  <h1 style={{ backgroundColor: "green" }}>Left side component</h1>
);

const RightComponent = () => (
  <h1 style={{ backgroundColor: "blue" }}>Right side component</h1>
);

export default {
  title: "Basic/SplitScreen",
  component: SplitScreen,
};

export const BasicSplitScreen = () => (
  <SplitScreen left={LeftComponent} right={RightComponent} />
);

// export const StyledSplitScreenExample = () => (
//   <StyledSplitScreen left={LeftComponent} right={RightComponent} />
// );
