import styled from "styled-components";
import { ReactNode, VFC } from "react";

export type StyledButtonProps = {
  text?: string;
  children?: ReactNode;
  dark?: boolean;
  color?: string;
};

// Using styled components, ui css attributes can be modified as a prop
const Btn = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.color? props.color: "teal")};
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  border-radius: 2px;
  border: none;
  cursor: pointer;
  box-shadow: none;
  max-width: 200px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: aqua;
  }
`;

export const StyledButton: VFC<StyledButtonProps> = ({
  text,
  children,
  dark,
  color
}: StyledButtonProps) => {
  const content = children ? children : text ? text : "+ Add ";
  return(
  <Btn
    dark={dark}
    color={color}
  >{content}</Btn>);
};
