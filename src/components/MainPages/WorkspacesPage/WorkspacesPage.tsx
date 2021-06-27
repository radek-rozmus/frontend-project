import { FC } from "react";
import styled from "styled-components";
import { Page } from "../../../styledHelpers/Components";
import { ResumeWork } from "../HomePage/innerComponents/ResumeWork/ResumeWork";
import { WorkspaceHeader } from "./innerComponents/WorkspaceHeader/WorkspaceHeader";
import { WorkspaceTiles } from "./innerComponents/WorkspaceTiles/WorkspaceTiles";

const PageInnerWrapper = styled(Page)``;

const WorkspaceResume = styled(ResumeWork)``;

export interface WorkspacesPageProps {
  
}

export const WorkspacesPage: FC<WorkspacesPageProps> = () => {
  return (
      <PageInnerWrapper>
        <WorkspaceHeader />
        <WorkspaceTiles />
        <WorkspaceResume />
      </PageInnerWrapper>
  );
};
