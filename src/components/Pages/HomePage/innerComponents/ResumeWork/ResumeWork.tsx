import { FC } from "react";
import styled from "styled-components";

import { Wrapper } from "../../../../../styledHelpers/Components";
import { ResumeWorkDimensions } from "../../../../../styledHelpers/commonVariables";
import { fontSize } from "../../../../../styledHelpers/FontSizes";

import { content } from "./content";

import { WorkTile } from "./WorkTile";
import { PageButtons } from "./PageButtons";
import { useAppSelector } from "../../../../../hooks/hooks";

const ResumeWorkWrapper = styled(Wrapper)`
  position: absolute;
  top: 740px;
  width: 400px;
  overflow: hidden;
  width: 100%;
  display: block;
  padding-bottom: 100px;
`;

const ResumeWorkTitle = styled(Wrapper)`
  position: absolute;
  top: ${ResumeWorkDimensions};
  left: 16px;
  height: 20px;
  font-size: ${fontSize[20]};
  width: 100%;
  justify-content: left;
`;

const ResumeWorkContent = styled.div`
  width: 100%;
  position: relative;
  top: 60px;
`;

export const ResumeWork: FC = () => {
  const page = useAppSelector((state) => state.resumeWork.page);
  return (
    <ResumeWorkWrapper>
      <ResumeWorkTitle>Resume your work</ResumeWorkTitle>
      <ResumeWorkContent>
        {content
          .filter((item) => {
            if (item.id <= page * 10 && item.id >= (page - 1) * 10 + 1)
              return item;
            return null;
          })
          .map((item) => {
            return (
              <WorkTile title={item.title} text={item.text} key={item.id} />
            );
          })}
      </ResumeWorkContent>
      <PageButtons page={page} />
    </ResumeWorkWrapper>
  );
};
