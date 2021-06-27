import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { boxShadow, Wrapper } from "../../../../../styledHelpers/Components";

const InnerWrapper = styled(Wrapper)`
  overflow: hidden;
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  height: 400px;
  ${boxShadow(0, 0, 10, -3)};
  position: absolute;
  top: 320px;
  height: 400px;
  width: 100%;
  text-align: left;
`;

export interface WorkspacesPageProps {
  
}

export const WorkspaceTiles: FC<WorkspacesPageProps> = () => {
  return (
      <InnerWrapper>
        Tiles
      </InnerWrapper>
  );
};
