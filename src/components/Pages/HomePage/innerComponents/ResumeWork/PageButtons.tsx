import {FC} from "react";
import styled from "styled-components";

import { Colors } from "../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../styledHelpers/FontSizes";

import { content } from "./content";
import { PageButton } from "./PageButton";
import { setPage, previousFewPages, nextFewPages } from "../../../../../actions/resumeWorkActions";

const PageButtonsWrapper = styled.div`
  position: relative;
  top: 64px;
  width: 100%;
  height: 24px;
  padding-top: 8px;
  text-align: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  user-select: none;
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
}

export const PageButtons: FC<PageButtonsProps> = ({page}) => {
  const numberOfPages = Math.ceil(content.length / 10);

  return (
    <PageButtonsWrapper>
      {page > 1 && (
        <PageButton click={previousFewPages} pages={1} text="PREVIOUS"/>
      )}
      {page > 2 && (
        <PageButton click={setPage} pages = {1} text="1"/>
      )}
      {(page - 1) - 1 > 1 && <MoreLabel>...</MoreLabel>}
      {page > 1 && (
        <PageButton click={previousFewPages} pages={1} text = {`${page - 1}`}/>
      )}
      {<PageLabel>{page}</PageLabel>}
      {page < numberOfPages && (
        <PageButton click={nextFewPages} pages = {1} text = {`${page + 1}`}/>
      )}
      {(numberOfPages - page) - 1 > 1 && <MoreLabel>...</MoreLabel>}
      {page < numberOfPages - 1 && (
        <PageButton click={setPage} pages = {numberOfPages} text = {`${numberOfPages}`}/>
      )}
      {page < numberOfPages && (
        <PageButton click={nextFewPages} pages = {1} text = "NEXT"/>
      )}
    </PageButtonsWrapper>
  );
};

