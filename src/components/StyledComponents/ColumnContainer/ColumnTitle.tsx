import { VFC } from "react";
import styled from "styled-components";

const StyledColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

type ColumnTitleProps = {
  text: string;
};

export const ColumnTitle: VFC<ColumnTitleProps> = ({
  text,
}: ColumnTitleProps) => {
  return <StyledColumnTitle>{text}</StyledColumnTitle>;
};
