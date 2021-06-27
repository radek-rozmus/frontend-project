import { ReactElement } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { cannotSelect, Wrapper } from "../../../../../styledHelpers/Components";
import { fontSize } from "../../../../../styledHelpers/FontSizes";

const InnerWrapper = styled.div`
  overflow: hidden;
  background-color: ${Colors.lightgray};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;
  width: 240px;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
  ${cannotSelect()};
  cursor: pointer;
`;
const Icon = styled.div`
font-size: 48px;
padding: 10px 10px 0 10px;
color: ${Colors.blue};
`;
const ContentWrapper = styled.div`
  padding: 10px;
`;
const Title = styled.div`
  font-size: ${fontSize[18]};
`;
const Description = styled.div`
  padding-top: 10px;
  line-height: 1.2;
  font-size: ${fontSize[14]};
`;

export interface WorkspacesPageProps {
  icon: ReactElement;
  title: string;
  description: string
}

export const WorkspaceTile: FC<WorkspacesPageProps> = ({icon, title, description}) => {
  return (
      <InnerWrapper>
        <Icon>{icon}</Icon>
        <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        </ContentWrapper>
      </InnerWrapper>
  );
};
