import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { border } from "../../../../styledHelpers/Components";

const InnerWrapper = styled.div`
  height: 68px;
  padding: 15px;
  ${border(1, "solid", Colors.lightgray)};
  border-radius: 5px;
`;

const Title = styled.div`
  color: ${Colors.blue};
`;

export interface EntityProps {
  text: string;
}

const Entity: FC<EntityProps> = ({ text }) => {
  return (
    <InnerWrapper>
      <Title>{text}</Title>
    </InnerWrapper>
  );
};

export default Entity;
