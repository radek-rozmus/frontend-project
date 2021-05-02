import { FC } from "react";
import styled from "styled-components";

import {
  Wrapper,
  border,
  boxShadow,
} from "../../../../../styledHelpers/Components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../styledHelpers/FontSizes";

const WorkTileWrapper = styled(Wrapper)`
  position: relative;
  text-align: center;
  background-color: white;
  height: 140px;
  width: calc(100% - 2px);
  ${border(1, "solid", Colors.lightgray)};
  border-radius: 5px;
  ${boxShadow(0, 0, 10, -5)};
  margin-bottom: 12px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  user-select: none;
  text-align: left;
  justify-content: left;
`;

const WorkTileTitle = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  height: 30px;
  font-size: ${fontSize[18]};
  color: ${Colors.blue};
`;
const WorkTileContent = styled.div`
  position: absolute;
  top: 46px;
  left: 12px;
  font-size: ${fontSize[16]};
  color: ${Colors.fontblue};
  line-height: 150%;
  font-weight: 400;
  width: calc(100% - 24px);
`;
const WorkTileDescription = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  font-size: ${fontSize[14]};
  color: ${Colors.grayLighter};
  font-weight: 400;
  line-height: 150%;
`;


export interface WorkTileProps {
  title: string;
  text: string;
}

export const WorkTile: FC<WorkTileProps> = (props) => {
  return (
    <WorkTileWrapper>
      <WorkTileTitle>{props.title}</WorkTileTitle>
      <WorkTileContent>{props.text}</WorkTileContent>
      <WorkTileDescription>Subsid. corp.  /  Client contract  /  Updated 3 days ago by USER</WorkTileDescription>
    </WorkTileWrapper>
  );
};
