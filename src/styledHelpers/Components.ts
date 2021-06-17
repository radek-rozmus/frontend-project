import styled from "styled-components";
import { Colors } from "./Colors";
import { LeftBarDimensions } from "./commonVariables";

export type Styles = {
  [ruleOrSelector: string]: string | number | Styles;
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;



export const Page = styled.div`
  position: absolute;
  width: calc(100vw - ${LeftBarDimensions.leftBarWidth} - ${LeftBarDimensions.userTileMargins});
`;

export const border = (
  width: number,
  style: string,
  color: string,
  which?: string
): Styles => {
  switch (which) {
    case "bottom":
      return {
        borderBottom: `${width}px ${style} ${color}`,
      };
    case "left":
      return {
        borderLeft: `${width}px ${style} ${color}`,
      };
    case "top":
      return {
        borderTop: `${width}px ${style} ${color}`,
      };
    case "right":
      return {
        borderRight: `${width}px ${style} ${color}`,
      };
    default:
      return {
        border: `${width}px ${style} ${color}`,
      };
  }
};

export const boxShadow = (a: number, b: number, c: number, d: number) => {
  return {
    boxShadow: `${a}px ${b}px ${c}px ${d}px ${Colors.shadowgray}`,
    mozBoxShadow: `${a}px ${b}px ${c}px ${d}px ${Colors.shadowgray}`,
    webkitBoxShadow: `${a}px ${b}px ${c}px ${d}px ${Colors.shadowgray}`,
  };
};

export const inputBorder = (): Styles => {
  return { border: `2px solid ${Colors.lightgray}`, borderRadius: `3px` };
};

export const cannotSelect = (): Styles => {
  return {
    userSelect: `none`,
    mozUserSelect: `none`,
    webkitUserSelect: `none`,
  };
};
