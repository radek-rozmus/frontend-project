import { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

import { Link } from "react-router-dom";

import { commonMenuElements } from "./ExpandedMenu";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setWorkspace } from "../../redux/actions/workspaceActions";

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

export const ExpandedMenuItem: FC<ListItemProps> = ({to, iconSrc, text}) => {
    
const{MenuImg, MenuImgWrapper, MenuImgDescription} = commonMenuElements;

const dispatch = useAppDispatch();
const handleItemClick = () => {
  dispatch(setWorkspace(text))
}

  return (
    <ListItem>
      <Link to={to} onClick = {handleItemClick}>
        <MenuImgWrapper>
          <MenuImg src={iconSrc} />
        </MenuImgWrapper>
        <MenuImgDescription>{text}</MenuImgDescription>
      </Link>
    </ListItem>
  );
};
