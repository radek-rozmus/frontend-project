import { FC } from "react";
import { Route, Switch } from "react-router";
import styled from "styled-components";
import { LeftBarDimensions } from "../../styledHelpers/commonVariables";

import { HomePage } from "../MainPages/HomePage/HomePage";
import { ProfilePage } from "../MainPages/ProfilePage/ProfilePage";
import { TestPage } from "../MainPages/TestPage/TestPage";
import { EntitiesPage } from "../MainPages/EntitiesPage/EntitiesPage";
import { useAppSelector } from "../../redux/hooks/hooks";
import { WorkspacesPage } from "../MainPages/WorkspacesPage/WorkspacesPage";

const PageWrapper = styled.div`
  position: absolute;
  left: ${LeftBarDimensions.leftBarWidth};
  top: ${LeftBarDimensions.userTileMargins};
`;

export const MainContent: FC = () => {

  const state = useAppSelector((state) => {
    const entitiesFullscreen = state.entities.fullscreen;
    return { entitiesFullscreen };
  })

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
          <EntitiesPage fullscreen = {state.entitiesFullscreen}/>
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
        <Route path="/workspaces">
          <WorkspacesPage/>
        </Route>
        <Route path="/test">
          <TestPage />
        </Route>
      </Switch>
    </PageWrapper>
  );
};
