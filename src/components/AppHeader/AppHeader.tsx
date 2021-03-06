import { FC, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  Wrapper,
  inputBorder,
  border,
  boxShadow,
} from "../../styledHelpers/Components";

import { Colors } from "../../styledHelpers/Colors";
import { ExpandedMenu } from "./ExpandedMenu";
import useDropdown from "react-dropdown-hook";
import { fontSize } from "../../styledHelpers/FontSizes";
import {
  AppHeaderDimensions,
} from "../../styledHelpers/commonVariables";

import { media } from "../../styledHelpers/Breakpoints";
import { User } from "../../models/types/User";
import { cannotSelect } from "../../styledHelpers/Components";

const TopBarWrapper = styled(Wrapper)`
  position: absolute;
  left: 0;
  top: 0;
  height: ${AppHeaderDimensions.barHeight};
  width: 100%;
  ${boxShadow(0, 0, 13, -3)};
  ${cannotSelect()};
  z-index: 1;
  //test
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.white};
  position: relative;
  display: flex;
  ${border(1, "solid", Colors.lightgray, "bottom")};
  align-items: center;
`;

const RightIconsPanel = styled.div`
  width: ${AppHeaderDimensions.rightIconsPanelWidth};
  height: 100%;
  text-align: center;
  position: absolute;
  right: ${AppHeaderDimensions.viewportEmptySpace};
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const InputWrapper = styled.div`
  position: absolute;
  right: calc(${AppHeaderDimensions.rightIconsPanelWidth} + 20px);
  width: ${AppHeaderDimensions.inputWrapperWidth};
  text-align: right;
  width: 480px !important;

  ${media.desktopLegacy`
  width: 600px !important;
    `};
`;

const SearchImg = styled.img`
  right: 12px;
  top: 10px;
  position: absolute;
  display: inline-block;
`;

export const CustomImg = styled.img`
`;

const AppLogo = styled.img`
  position: absolute;
  left: ${AppHeaderDimensions.viewportEmptySpace};
  overflow: hidden;
`;

export const CustomInput = styled.input`
  font-size: ${fontSize[14]};
  color: ${Colors.fontblue};
  background: ${Colors.white};
  height: 28px;
  padding-top: 4px;
  position: relative;
  text-align: center;
  width: 100%;
  outline: none;
  ${inputBorder()};
`;

const ExpandedMenuWrapper = styled.div`
  position: absolute;
  left: 100px;
`;
const ExpandedMenuButton = styled.div`
  cursor: pointer;
  width: 200px;
  display: flex;
  align-items: center;

  & ${CustomImg}:nth-child(1) {
    position: relative;
    padding-right: 10px;
  }
  & ${CustomImg}:nth-child(3) {
    position: absolute;
    right: 0;
  }
`;

const NotificationBadge = styled.span`
  top: 0;
  right: 0;
  width: 17px;
  height: 15px;
  padding-top: 3px;
  padding-left: 1px;
  border-radius: 200px;
  text-align: center;
  position: absolute;
  background-color: ${Colors.notificationColor};
  font-size: ${fontSize[12]};
  color: ${Colors.white};
  `;
  const LinkIconWrap = styled(Link)`
  position: relative;
  background-color: ${Colors.backgroundgray};
  width: 50px;
  height: 36px;
  padding-top: 14px;
  border-radius: 200px;
  margin: 0 4px;
  `;

export interface AppHeaderProps {
  user: User;
}

export const AppHeader: FC<AppHeaderProps> = (props) => {
  const [dropdownWrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    if (searchInput && searchInput.current) {
      searchInput.current.focus();
    }
  };

  const menuHandle = () => {
    toggleDropdown();
  };

  return (
    <TopBarWrapper>
      <InnerWrapper>
        <AppLogo src="./media/logo-min.png" />
        <ExpandedMenuWrapper ref={dropdownWrapperRef}>
          <ExpandedMenuButton onClick={menuHandle}>
            <CustomImg src="./media/icons/house.png" />
            <span>Home</span>
            <CustomImg src="./media/icons/arrow-down.png" />
          </ExpandedMenuButton>
          {dropdownOpen && <ExpandedMenu user={props.user} />}
        </ExpandedMenuWrapper>
        <InputWrapper>
          <CustomInput type="text" placeholder="Search" ref={searchInput} />
          <SearchImg
            src="./media/icons/search.png"
            onClick={handleSearchClick}
          />
        </InputWrapper>
        <RightIconsPanel>
          <LinkIconWrap to="/home">
            <CustomImg src="./media/icons/house.png" />
          </LinkIconWrap>
          <LinkIconWrap to="/comments">
            <CustomImg src="./media/icons/comments.png" />
            <NotificationBadge>7</NotificationBadge>
          </LinkIconWrap>
          <LinkIconWrap to="/notifications">
            <CustomImg src="./media/icons/bell.png" />
            <NotificationBadge>3</NotificationBadge>
          </LinkIconWrap>
        </RightIconsPanel>
      </InnerWrapper>
    </TopBarWrapper>
  );
};
