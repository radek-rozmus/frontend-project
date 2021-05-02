import { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

import { Colors } from "../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../styledHelpers/FontSizes";

import { content } from "./content";

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
const PageButton = styled.button`
  display: inline-block;
  height: 100%;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  color: ${Colors.lightblue};
  font-size: ${fontSize[16]};
  padding: 0 6px;
  background-color: ${Colors.backgroundgray};
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
  change: Dispatch<SetStateAction<number>>;
}

export const PageButtons: FC<PageButtonsProps> = (props) => {
  const numberOfPages = Math.ceil(content.length / 10);

  return (
    <PageButtonsWrapper>
      {props.page > 1 && (
        <PageButton onClick={props.change.bind(this, (prev) => prev - 1)}>
          PREVIOUS
        </PageButton>
      )}
      {props.page > 2 && (
        <PageButton onClick={props.change.bind(this, 1)}>{1}</PageButton>
      )}
      {(props.page - 1) - 1 > 1 && <MoreLabel>...</MoreLabel>}
      {props.page > 1 && (
        <PageButton onClick={props.change.bind(this, (prev) => prev - 1)}>
          {props.page - 1}
        </PageButton>
      )}
      {<PageLabel>{props.page}</PageLabel>}
      {props.page < numberOfPages && (
        <PageButton onClick={props.change.bind(this, (prev) => prev + 1)}>
          {props.page + 1}
        </PageButton>
      )}
      {(numberOfPages - props.page) - 1 > 1 && <MoreLabel>...</MoreLabel>}
      {props.page < numberOfPages - 1 && (
        <PageButton onClick={props.change.bind(this, numberOfPages)}>
          {numberOfPages}
        </PageButton>
      )}
      {props.page < numberOfPages && (
        <PageButton onClick={props.change.bind(this, (prev) => prev + 1)}>
          NEXT
        </PageButton>
      )}
    </PageButtonsWrapper>
  );
};
