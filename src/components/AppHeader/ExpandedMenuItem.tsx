import { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

import { Link } from "react-router-dom";

import { commonMenuElements } from "./ExpandedMenu";

const ListItem = styled.li`
  height: 36px;
  width: 100%;
  font-size: ${fontSize[14]};
  & a {
    text-decoration: none;
    color: ${Colors.fontblue};
  }
`;

export interface ListItemProps {
  to: string;
  iconSrc: string;
  text: string;
}

export const ExpandedMenuItem: FC<ListItemProps> = (props) => {
    
const{MenuImg, MenuImgWrapper, MenuImgDescription} = commonMenuElements;
  return (
    <ListItem>
      <Link to={props.to}>
        <MenuImgWrapper>
          <MenuImg src={props.iconSrc} />
        </MenuImgWrapper>
        <MenuImgDescription>{props.text}</MenuImgDescription>
      </Link>
    </ListItem>
  );
};
