import { FC } from "react";
import { Route, Switch } from "react-router";
import styled from "styled-components";
import { LeftBarDimensions } from "../../styledHelpers/commonVariables";

import { HomePage } from "../Pages/HomePage/HomePage";
import { ProfilePage } from "../Pages/ProfilePage";
import { TestPage } from "../Pages/TestPage";
import { EntitiesPage } from "../Pages/EntitiesPage";

const PageWrapper = styled.div`
  background-color: red;
  position: absolute;
  left: ${LeftBarDimensions.leftBarWidth};
  top: ${LeftBarDimensions.userTileMargins};
`;

export const MainContent: FC = () => {
  return (
    <PageWrapper>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/publications">
          <TestPage />
        </Route>
        <Route path="/people">
          <TestPage />
        </Route>
        <Route path="/entities">
          <EntitiesPage />
        </Route>
        <Route path="/administrations">
          <TestPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/client-contract">
          <TestPage />
        </Route>
        <Route path="/supplier-contract">
          <TestPage />
        </Route>
        <Route path="/corporate">
          <TestPage />
        </Route>
        <Route path="/group-norms">
          <TestPage />
        </Route>
        <Route path="/real-contracts">
          <TestPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/privacy">
          <TestPage />
        </Route>
        <Route path="/settings">
          <TestPage />
        </Route>
        <Route path="/your-publications">
          <TestPage />
        </Route>
        <Route path="/your-network">
          <TestPage />
        </Route>
        <Route path="/ecosystem">
          <TestPage />
        </Route>
        <Route path="/comments">
          <TestPage />
        </Route>
        <Route path="/notifications">
          <TestPage />
        </Route>
      </Switch>
    </PageWrapper>
  );
};
