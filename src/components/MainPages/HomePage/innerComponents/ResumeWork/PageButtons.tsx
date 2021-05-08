import {FC} from "react";
import styled from "styled-components";

import { cannotSelect } from "../../../../../styledHelpers/Components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../styledHelpers/FontSizes";

import { PageButton } from "./PageButton";
import { setPage, previousFewPages, nextFewPages } from "../../../../../redux/actions/resumeWorkActions";

const PageButtonsWrapper = styled.div`
  position: relative;
  top: 64px;
  width: 100%;
  height: 24px;
  padding-top: 8px;
  text-align: center;
  ${cannotSelect()};
`;
const PageLabel = styled.div`
  display: inline-block;
  height: 100%;
  text-transform: uppercase;
  color: ${Colors.black};
  font-size: ${fontSize[16]};
  padding: 0 6px;
`;
const MoreLabel = styled(PageLabel)`
  color: ${Colors.lightblue};
`;

export interface PageButtonsProps {
  page: number;
  numberOfPages: number;
}

export const PageButtons: FC<PageButtonsProps> = ({page, numberOfPages}) => {

  const component = numberOfPages > 1?(
    <PageButtonsWrapper>
      { numberOfPages > 1 && page > 1 && (
        <PageButton click={previousFewPages} pages={1} text="PREVIOUS"/>
      )}
      {numberOfPages > 1 && page > 2 && (
        <PageButton click={setPage} pages = {1} text="1"/>
      )}
      {numberOfPages > 1 && (page - 1) - 1 > 1 && <MoreLabel>...</MoreLabel>}
      {page > 1 && (
        <PageButton click={previousFewPages} pages={1} text = {`${page - 1}`}/>
      )}
      {numberOfPages > 1 && <PageLabel>{page}</PageLabel>}
      {numberOfPages > 1 && page < numberOfPages && (
        <PageButton click={nextFewPages} pages = {1} text = {`${page + 1}`}/>
      )}
      {(numberOfPages - page) - 1 > 1 && <MoreLabel>...</MoreLabel>}
      {numberOfPages > 1 && page < numberOfPages - 1 && (
        <PageButton click={setPage} pages = {numberOfPages} text = {`${numberOfPages}`}/>
      )}
      {numberOfPages > 1 && page < numberOfPages && (
        <PageButton click={nextFewPages} pages = {1} text = "NEXT"/>
      )}
    </PageButtonsWrapper>
  ) : <></>;

  return component;
};

