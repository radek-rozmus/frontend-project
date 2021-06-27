import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { boxShadow } from "../../../../../styledHelpers/Components";

const InnerWrapper = styled.div`
  overflow: hidden;
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  height: 300px;
  ${boxShadow(0, 0, 10, -3)};
`;
const Banner = styled.div`
  height: 200px;
  background-color: ${Colors.blue};
`;
const Description = styled.div`
  height: 100px;
  background-color: ${Colors.white};
`;


export interface WorkspacesPageProps {
  
}

export const WorkspaceHeader: FC<WorkspacesPageProps> = () => {
  return (
      <InnerWrapper>
        <Banner>Banner</Banner>
        <Description>Description</Description>
      </InnerWrapper>
  );
};
