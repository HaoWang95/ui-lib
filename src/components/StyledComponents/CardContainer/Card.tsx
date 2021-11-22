import styled from "styled-components";
import { VFC } from "react";

const StyledCard = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 2px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

export type CardProps = {
  text: string;
  id?: string
};

export const Card: VFC<CardProps> = ({ text, id }: CardProps) => {
  return <StyledCard id={id}>{text ? text : "Task Card Content"}</StyledCard>;
};
