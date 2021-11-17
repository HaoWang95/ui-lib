import styled from "styled-components";
import { Children, ReactNode, VFC } from "react";

const Btn = styled.button`
  background-color: #5aac44;
  color: #fff;
  border-radius: 2px;
  border: none;
  box-shadow: none;
`;

export type StyledButtonProps = {
  text?: string;
  children?: ReactNode
};

export const StyledButton: VFC<StyledButtonProps> = ({
  text, children
}: StyledButtonProps) => {
  const content = children?children:(text?text:"+ Add ")
  return <Btn>{content}</Btn>;
};
