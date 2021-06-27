import { FC } from "react";
import styled from "styled-components";

import { border } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

import { Link } from "react-router-dom";
import { User } from "../../models/types/User";

import { commonMenuElements } from "./ExpandedMenu";
import { useAppSelector } from "../../redux/hooks/hooks";
import { userConfig } from "../../config";

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
const AccountTileMenuItem = styled(Link)`
  display: block;
  text-decoration: none;
  cursor: pointer;
  height: 32px;
  padding-top: 4px;
  width: 100%;
  font-size: ${fontSize[14]};
  color: ${Colors.fontblue};
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

export interface ExpandedMenuAccountTileProps {
  user: User;
}

export const ExpandedMenuAccountTile: FC<ExpandedMenuAccountTileProps> = (
  props
) => {
  const { MenuImg, MenuImgWrapper, MenuImgDescription } = commonMenuElements;

  const state = useAppSelector((state) => {
    const photoSrc = state.photos.photos[userConfig.user].url
    return {photoSrc}
  })

  return (
    <>
      <AccountTile>
        <AccountTileTitle>Account</AccountTileTitle>

        <Link to="/profile">
          <AccountTileMain>
            <UserImg src={state.photoSrc} />
            <UserName>{props.user.name}</UserName>
            <SeeProfile>See Profile</SeeProfile>
          </AccountTileMain>
        </Link>
        <AccountTileMenuItem to="/privacy">
          <MenuImgWrapper>
            <MenuImg src="./media/icons/privacy.png" />
          </MenuImgWrapper>
          <MenuImgDescription>Privacy</MenuImgDescription>
        </AccountTileMenuItem>
        <AccountTileMenuItem to="/settings">
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
    </>
  );
};
