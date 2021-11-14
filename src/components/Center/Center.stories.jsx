import React from "react";
import Center from "./Center";
import Button from "../Button/Button";

export default {
  title: "Layout/CenteredButton",
  component: Center,
};

export const CenteredPrimaryBtn = () => (
  <Center>
    <Button variant="primary">CenteredPrimary</Button>
  </Center>
);

CenteredPrimaryBtn.storyName = "CenteredPrimaryButton";

export const CenteredSecondaryBtn = () => (
  <Center>
    <Button variant="secondary">CenteredPrimary</Button>
  </Center>
);

CenteredSecondaryBtn.storyName = "CenteredSecondaryButton";

export const CenteredSuccessBtn = () => (
  <Center>
    <Button variant="success">CenteredSuccess</Button>
  </Center>
);

CenteredSuccessBtn.storyName = "CenteredSuccessButton";
