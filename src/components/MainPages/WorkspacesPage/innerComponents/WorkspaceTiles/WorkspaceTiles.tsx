import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { boxShadow, Wrapper } from "../../../../../styledHelpers/Components";
import { WorkspaceTile } from "../WorkspaceTile/WorkspaceTile";
import {FaBuilding} from 'react-icons/fa';
import {ImTree} from 'react-icons/im';
import {BsCalendar} from 'react-icons/bs';
import { Link } from "react-router-dom";

const InnerWrapper = styled(Wrapper)`
  overflow: hidden;
  background-color: ${Colors.white};
  display: flex;
  align-items: center;
  height: 300px;
  ${boxShadow(0, 0, 10, -3)};
  position: absolute;
  top: 420px;
  width: 100%;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: ${Colors.fontblue};
  text-decoration: none;
`;

export const WorkspaceTiles: FC = () => {
  return (
    <InnerWrapper>
      <StyledLink to = '/entities'><WorkspaceTile icon = {<FaBuilding/>}  title = {`Explore your entities`} description = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}/></StyledLink>
      <StyledLink to = '/test'><WorkspaceTile icon = {<ImTree/>}  title = {`Structure the ownership`} description = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}/></StyledLink>
      <StyledLink to = '/test'><WorkspaceTile icon = {<BsCalendar/>}  title = {`Define the calendar`} description = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}/></StyledLink>
    </InnerWrapper>
  );
};
