import { FC } from "react";
import { Route } from "react-router";
import styled from "styled-components";
import { LeftBarDimensions } from "../../styledHelpers/commonVariables";

const Page = styled.div`
background-color: red;
position: absolute;
width: calc(100vw - ${LeftBarDimensions.leftBarWidth} - ${LeftBarDimensions.userTileMargins});
`;
const ProfilePage = styled(Page)`
background-color: green;
`;
const PageWrapper = styled.div`
background-color: red;
position: absolute;
left: ${LeftBarDimensions.leftBarWidth};
top: ${LeftBarDimensions.userTileMargins};
`;

export const MainContent: FC = () => {
  return (
    <PageWrapper>
      <Route path="/" exact><Page>Home</Page></Route>
      <Route path="/home"><Page>Home</Page></Route>
      <Route path="/publications"><Page>Publications</Page></Route>
      <Route path="/people"><Page>People</Page></Route>
      <Route path="/entities"><Page>Entities</Page></Route>
      <Route path="/administrations"><Page>Administrations</Page></Route>
      <Route path="/profile"><ProfilePage>ProfilePage</ProfilePage></Route>
    </PageWrapper>
  );
};