import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { LeftBarDimensions } from "../../styledHelpers/commonVariables";
import { Colors } from "../../styledHelpers/Colors";

export const MenuItem = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${Colors.fontblue};
  position: relative;
  width: ${LeftBarDimensions.userTileDimensions};
  height: 40px;
  padding-top: 10px;
  cursor: pointer;
`;

export const MenuItemIconLayout = styled.div`
  position: absolute;
  width: ${LeftBarDimensions.leftMenuIconWidth};
`;

export const MenuItemIcon = styled.img`
  position: absolute;
  left: 9px;
`;

export const MenuItemTitle = styled.div`
  position: absolute;
  left: ${LeftBarDimensions.leftMenuIconWidth};
`;

export const MenuList = styled.ul`
  position: absolute;
  top: calc(${LeftBarDimensions.userTileDimensions} + ${LeftBarDimensions.userTileSpaces}*2 + 6px
  );
  left: 20px;

  & ${MenuItem}:nth-child(1) > ${MenuItemIconLayout} > ${MenuItemIcon} {
    left: 14px;
  }
  & ${MenuItem}:nth-child(2) > ${MenuItemIconLayout} > ${MenuItemIcon} {
    left: 12px;
  }
  & ${MenuItem}:nth-child(1) > ${MenuItemIconLayout} > ${MenuItemIcon} {
    left: 14px;
  }
  & ${MenuItem}:nth-child(2) > ${MenuItemTitle} {
    top: 11px;
  }
  & ${MenuItem}:nth-child(3) > ${MenuItemTitle} {
    top: 15px;
  }
`;

export const LeftMenu: FC = () => {
  return (
    <MenuList>
      <MenuItem to="/publications">
        <MenuItemIconLayout>
          <MenuItemIcon src="./media/icons/publications.png" />
        </MenuItemIconLayout>
        <MenuItemTitle>Publications</MenuItemTitle>
      </MenuItem>
      <MenuItem to="/ecosystem">
        <MenuItemIconLayout>
          <MenuItemIcon src="./media/icons/ecosystem.png" />
        </MenuItemIconLayout>
        <MenuItemTitle>Ecosystem</MenuItemTitle>
      </MenuItem>
      <MenuItem to="/entities">
        <MenuItemIconLayout>
          <MenuItemIcon src="./media/icons/entities.png" />
        </MenuItemIconLayout>
        <MenuItemTitle>Entities</MenuItemTitle>
      </MenuItem>
    </MenuList>
  );
};
