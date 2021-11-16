import styled from "styled-components";
import { VFC } from "react";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 10px;
  background-color: #3179ba;
`;

export const AppContainerComponent: VFC<{}> = ({}) => {
  return <AppContainer>Children will be here</AppContainer>;
};
