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
  border-radius: .3rem;
  padding: 8px 8px;
  flex-grow: 0;
`;

export type ColumnProps = {
  text: string;
  children?: ReactNode;
};

export const Column: VFC<ColumnProps> = ({ text, children }: ColumnProps) => {
  return (
    <StyledColumn>
      <ColumnTitle text={text} />
      <Card text={text} />
      <AddItemButton 
        dark={true}
      >
        + Add a new item
      </AddItemButton>
      {children? children : "Children cards components will be here"}
    </StyledColumn>
  );
};
