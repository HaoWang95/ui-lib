import styled from "styled-components";
import { VFC, ReactNode } from "react";
import { ColumnTitle } from "./ColumnTitle";
import { Card } from "../CardContainer/Card";
import { AddItemButton } from "../AddItemButton/AddItemButton";

const StyledColumn = styled.div`
  background-color: #ebecf0;
  width: 20%;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 0.3rem;
  padding: 8px 8px;
  flex-grow: 0;
`;

export type ColumnProps = {
  id?: string;
  text: string;
  children?: ReactNode;
};

export const Column: VFC<ColumnProps> = ({
  id,
  text,
  children,
}: ColumnProps) => {

  return (
    <StyledColumn id={id?id:""}>
      <ColumnTitle text={text ? text : "text"} />
      {children}
      <AddItemButton dark={true}>+ Add a new item</AddItemButton>
    </StyledColumn>
  );
};
