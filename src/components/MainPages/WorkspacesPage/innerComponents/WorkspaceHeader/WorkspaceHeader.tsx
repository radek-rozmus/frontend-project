import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { boxShadow } from "../../../../../styledHelpers/Components";
import { FaBuilding } from "react-icons/fa";
import { fontSize } from "../../../../../styledHelpers/FontSizes";
import { useAppSelector } from "../../../../../redux/hooks/hooks";

const InnerWrapper = styled.div`
  overflow: hidden;
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  height: 400px;
  ${boxShadow(0, 0, 10, -3)};
`;
const Banner = styled.div`
  height: 240px;
  background-color: ${Colors.blue};
  padding: 20px;
  color: ${Colors.white};
`;
const Description = styled.div`
  height: 120px;
  background-color: ${Colors.white};
  display: flex;
  flex-direction: row;
`;
const WorkspaceIcon = styled.div`
  height: 120px;
  width: 120px;
  font-size: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WorkspaceContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const WorkspaceTitle = styled.div`
  height: 100%;
  width: 100%;
  font-size: ${fontSize[20]};
  display: flex;
  align-items: center;
  align-items: flex-end;
`;
const WorkspaceDescription = styled.div`
  height: 100%;
  width: 100%;
  font-size: ${fontSize[14]};
  display: flex;
  flex-wrap: wrap;
  line-height: 1.2;
`;

export interface WorkspacesPageProps {}

export const WorkspaceHeader: FC<WorkspacesPageProps> = () => {
  const state = useAppSelector((state) => {
    const name = state.workspaces.workspace;
    return { name };
  });

  return (
    <InnerWrapper>
      <Banner>Workspace</Banner>
      <Description>
        <WorkspaceIcon>
          <FaBuilding />
        </WorkspaceIcon>
        <WorkspaceContentWrapper>
          <WorkspaceTitle>{state.name}</WorkspaceTitle>
          <WorkspaceDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum qui
            officia cum! Magnam assumenda eveniet corporis necessitatibus
            temporibus.
          </WorkspaceDescription>
        </WorkspaceContentWrapper>
      </Description>
    </InnerWrapper>
  );
};
