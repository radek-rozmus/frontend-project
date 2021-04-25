import { FC } from "React";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { border, inputBorder } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import {
  AppHeaderDimensions,
  ExpandedMenuDimensions,
} from "../../styledHelpers/commonVariables";

import { User } from "../../types/User";

const FilterInput = styled.input`
  width: 182px;
  font-size: ${fontSize[14]};
  color: ${Colors.fontblue};
  background: ${Colors.white};
  height: 28px;
  padding-top: 4px;
  padding-left: 10px;
  outline: none;
  outline: none;
  ${inputBorder()};
  text-align: left;
`;

const List = styled.ul`
  padding: 0;
`;

const ListTitle = styled.div`
  height: 20px;
  width: 178px;
  font-size: ${fontSize[14]};
  padding-top: 10px;
`;
const ListItem = styled.li`
  height: 36px;
  width: 100%;
  font-size: ${fontSize[14]};
  & a {
    text-decoration: none;
    color: ${Colors.fontblue};
  }
`;

const MenuImgWrapper = styled.div`
  position: absolute;
  left: 10px;
  width: 40px;
  height: 32px;
`;

const MenuImg = styled.img`
  position: relative;
  top: 4px;
`;

const MenuImgDescription = styled.div`
  position: relative;
  left: 40px;
  top: 10px;
`;

const Menu = styled.div`
  position: absolute;
  top: calc(
    ${AppHeaderDimensions.barHeight} - ${ExpandedMenuDimensions.topSpace} + 1px
  );
  width: 200px;
  padding: 10px;
  background: white;
  ${border(1, "solid", Colors.lightgray)};
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  user-select: none;
`;
const AccountTile = styled.div`
  width: 200px;
  height: 160px;
  ${border(1, "solid", Colors.lightgray, "top")};
`;
const AccountTileTitle = styled.div`
  color: ${Colors.gray};
  position: relative;
  padding-top: 10px;
  height: 10px;
  width: 80px;
  font-size: ${fontSize[14]};
`;
const AccountTileMain = styled.div`
  color: ${Colors.fontblue};
  position: relative;
  left: 0;
  height: 66px;
  font-size: ${fontSize[14]};
  a {
    display: block;
    color: ${Colors.fontblue};
  }
`;
const AccountTileMenuItem = styled.div`
  cursor: pointer;
  height: 32px;
  padding-top: 4px;
  width: 100%;
  font-size: ${fontSize[14]};
`;
const LogoutButton = styled.button`
  width: 200px;
  background: white;
  border: none;
  outline: none;
  ${border(1, "solid", Colors.lightgray, "top")};
  font-size: ${fontSize[18]};
  color: ${Colors.gray};
  padding: 8px 0;
  cursor: pointer;
`;
const LogoutDescription = styled.div`
  position: relative;
  top: 3px;
  padding-left: 12px;
  display: inline-block;
`;

const UserImg = styled.img`
  border-radius: 200px;
  width: 40px;
  height: 40px;
  position: relative;
  top: 16px;
`;
const UserName = styled.div`
  padding-top: 4px;
  height: 16px;
  position: absolute;
  width: 140px;
  height: 20px;
  left: 50px;
  top: 16px;
`;
const SeeProfile = styled.div`
  padding-top: 4px;
  height: 16px;
  position: absolute;
  width: 100px;
  height: 20px;
  left: 50px;
  top: 36px;
  font-size: ${fontSize[12]};
  color: ${Colors.blue};
`;

export interface ExpandedMenuProps {
  user: User;
};  

export const ExpandedMenu: FC<ExpandedMenuProps> = (props) => {
  return (
    <Menu>
      <FilterInput placeholder="Filter..." />
      <List>
        <ListTitle>Platform</ListTitle>
        <ListItem>
          <Link to="/home">
            <MenuImgWrapper>
              <MenuImg src="./media/icons/house.png" />
            </MenuImgWrapper>
            <MenuImgDescription>Home</MenuImgDescription>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/publications">
            <MenuImgWrapper>
              <MenuImg src="./media/icons/publications.png" />
            </MenuImgWrapper>
            <MenuImgDescription>Publications</MenuImgDescription>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/people">
            <MenuImgWrapper>
              <MenuImg src="./media/icons/people.png" />
            </MenuImgWrapper>
            <MenuImgDescription>People</MenuImgDescription>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/entities">
            <MenuImgWrapper>
              <MenuImg src="./media/icons/entities2.png" />
            </MenuImgWrapper>
            <MenuImgDescription>Entities</MenuImgDescription>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/administrations">
            <MenuImgWrapper>
              <MenuImg src="./media/icons/administration.png" />
            </MenuImgWrapper>
            <MenuImgDescription>Administrations</MenuImgDescription>
          </Link>
        </ListItem>
      </List>
      <List>
        <ListTitle>Workspaces</ListTitle>
        <ListItem>
          <Link to="/client-contract">
            <MenuImgWrapper>
              <MenuImg src="./media/icons/comments.png" />
            </MenuImgWrapper>
            <MenuImgDescription>Client contract</MenuImgDescription>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/supplier-contract">
            <MenuImgWrapper>
              <MenuImg src="./media/icons/comments.png" />
            </MenuImgWrapper>
            <MenuImgDescription>Supplier contract</MenuImgDescription>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/corporate">
            <MenuImgWrapper>
              <MenuImg src="./media/icons/house.png" />
            </MenuImgWrapper>
            <MenuImgDescription>Corporate</MenuImgDescription>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/group-norms">
            <MenuImgWrapper>
              <MenuImg src="./media/icons/entities.png" />
            </MenuImgWrapper>
            <MenuImgDescription>Group Norms</MenuImgDescription>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/real-contracts">
            <MenuImgWrapper>
              <MenuImg src="./media/icons/comments.png" />
            </MenuImgWrapper>
            <MenuImgDescription>Real estate contracts</MenuImgDescription>
          </Link>
        </ListItem>
      </List>
      <AccountTile>
        <AccountTileTitle>Account</AccountTileTitle>

        <Link to="/profile">
          <AccountTileMain>
            <UserImg src={"./media/user-photo.jpg"} />
            <UserName>{props.user.name}</UserName>
            <SeeProfile>See Profile</SeeProfile>
          </AccountTileMain>
        </Link>
        <AccountTileMenuItem>
          <MenuImgWrapper>
            <MenuImg src="./media/icons/privacy.png" />
          </MenuImgWrapper>
          <MenuImgDescription>Privacy</MenuImgDescription>
        </AccountTileMenuItem>
        <AccountTileMenuItem>
          <MenuImgWrapper>
            <MenuImg src="./media/icons/settings.png" />
          </MenuImgWrapper>
          <MenuImgDescription>Settings</MenuImgDescription>
        </AccountTileMenuItem>
      </AccountTile>
      <LogoutButton>
        <MenuImg src="./media/icons/logout.png" />
        <LogoutDescription>Logout</LogoutDescription>
      </LogoutButton>
    </Menu>
  );
};
