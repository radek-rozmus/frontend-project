import styled from "styled-components";
import { Colors } from "./Colors";

export type Styles = {
  [ruleOrSelector: string]: string | number | Styles;
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const color2 = (): Styles => {
  return {
    color: `${Colors.black}`,
  };
};

export const border = (): Styles => {
  return {
    border: `1px solid`,
  };
};

export const inputBorder = (): Styles[] => {
  return [
        { border: `2px solid ${Colors.lightgray}` },
        { borderRadius: `3px` },
    ];
};
