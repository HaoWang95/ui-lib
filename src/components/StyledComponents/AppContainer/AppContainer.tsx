import styled from "styled-components";
import { ReactNode, VFC } from "react";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  padding: 10px;
  background-color: #3179ba;
  text-align: center;
  /*justify-content: center;*/
`;

export type AppContainerProps = {
  children?: ReactNode;
};

export const AppContainerComponent: VFC<AppContainerProps> = ({
  children,
}: AppContainerProps) => {
  return (
    <AppContainer>
      {children ? children : "Children components will be here"}
    </AppContainer>
  );
};
