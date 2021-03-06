import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Wrapper, boxShadow, border, cannotSelect } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { User } from "../../models/types/User";
import { LeftMenu } from "./LeftMenu";
import { LeftBarDimensions } from "../../styledHelpers/commonVariables";
import { useAppSelector } from "../../redux/hooks/hooks";
import { userConfig } from "../../config";

const LeftBarWrapper = styled(Wrapper)`
  left: 0;
  top: 0;
  position: relative;
  width: ${LeftBarDimensions.leftBarWidth};
  height: 100%;
  display: block;
  font-size: ${fontSize[16]};
  ${cannotSelect()};
`;

const UserTile = styled.div`
  text-align: center;
  position: absolute;
  top: ${LeftBarDimensions.userTileMargins};
  left: ${LeftBarDimensions.userTileMargins};
  width: ${LeftBarDimensions.userTileDimensions};
  height: ${LeftBarDimensions.userTileDimensions};
  background-color: ${Colors.white};
  ${boxShadow(1, 1, 10, -3)};
  display: block;
  font-size: ${fontSize[14]};
`;
const UserLink = styled(Link)`
  text-decoration: none;
  display: block;
`;

const UserImg = styled.img`
  border-radius: 200px;
  width: 70px;
  height: 70px;
  position: relative;
  top: 24px;
`;

const UserName = styled.div`
  text-align: center;
  position: relative;
  top: 32px;
  width: ${LeftBarDimensions.userTileDimensions};
  height: 24px;
  padding-top: 6px;
  color: ${Colors.blue};
`;

const UserJobTitle = styled.div`
  text-align: center;
  position: relative;
  top: 32px;
  width: ${LeftBarDimensions.userTileDimensions};
  height: 28px;
  padding-top: 2px;
  ${border(1, "solid", Colors.lightgray, "bottom")}
  color: ${Colors.gray};
  font-weight: 400;
`;

const UserMenuItem = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${Colors.fontblue};
  cursor: pointer;
  height: 40px;
  width: ${LeftBarDimensions.userTileDimensions};
`;
const UserMenuItemIcon = styled.img`
  position: absolute;
  left: 32px;
  padding-top: 20px;
`;
const UserMenuItemIconAdd = styled.img`
  position: absolute;
  right: 24px;
  padding: 4px 8px;
  ${border(1, "solid", Colors.fontblue)}
  border-radius: 3px;
`;
const UserItemTitle = styled.div`
  position: relative;
  top: 20px;
`;
const UserMenu = styled.ul`
  width: ${LeftBarDimensions.userTileDimensions};
  height: 70px;
  position: absolute;
  top: 164px;

  & ${UserMenuItem}:nth-child(1) > ${UserMenuItemIcon} {
    padding-top: 16px;
  }
  & ${UserMenuItem}:nth-child(1) {
    padding-top: 4px;
  }
  & ${UserMenuItem}:nth-child(2) {
    position: relative;
    bottom: 2px;
    padding-bottom: 4px;
  }
`;

export interface LeftMenuProps {
  user: User;
}

export const LeftBar: FC<LeftMenuProps> = (props) => {
const state = useAppSelector((state) => {
  const photoSrc = state.photos.photos[userConfig.user].url
  return {photoSrc}
})

  return (
    <LeftBarWrapper>
      <UserTile>
        <UserLink to="/profile">
          <UserImg src={state.photoSrc} />
          <UserName>{props.user.name}</UserName>
          <UserJobTitle>Developer - {props.user.company}</UserJobTitle>
        </UserLink>
        <UserMenu>
          <UserMenuItem to = "/your-network">
            <UserMenuItemIcon src={"./media/icons/network.png"} />
            <UserItemTitle>Your network</UserItemTitle>
            <UserMenuItemIconAdd src={"./media/icons/user-plus.png"} />
          </UserMenuItem>
          <UserMenuItem to = "/your-publications">
            <UserMenuItemIcon src={"./media/icons/publications.png"} />
            <UserItemTitle>Your publications</UserItemTitle>
            <UserMenuItemIconAdd src={"./media/icons/plus.png"} />
          </UserMenuItem>
        </UserMenu>
      </UserTile>
      <LeftMenu />
    </LeftBarWrapper>
  );
};
