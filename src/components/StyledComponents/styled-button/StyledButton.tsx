import styled from "styled-components";
import { VFC } from "react";

const Btn = styled.button`
  background-color: #5aac44;
  color: #fff;
  border-radius: 2px;
  border: none;
  box-shadow: none;
`;

export type StyledButtonProps = {
  text?: string;
};

export const StyledButton: VFC<StyledButtonProps> = ({
  text,
}: StyledButtonProps) => {
  return <Btn>{text}</Btn>;
};
