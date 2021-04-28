import { FC } from "React";
import styled from "styled-components";
import {Link} from "react-router-dom";

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
  ExpandedMenuDimensions,
  AppHeaderDimensions,
} from "../../styledHelpers/commonVariables";

import { media } from "../../styledHelpers/Breakpoints";
import { User } from "../../types/User";

const TopBarWrapper = styled(Wrapper)`
  position: absolute;
  left: 0;
  top: 0;
  height: ${AppHeaderDimensions.barHeight}; //set height to 50px
  width: 100%;
  ${boxShadow(0, 0, 13, -3)}
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.white};
  position: relative;
  ${border(1, "solid", Colors.lightgray, "bottom")}
`;

const RightIconsPanel = styled.div`
  top: ${AppHeaderDimensions.viewportEmptySpace};
  width: ${AppHeaderDimensions.rightIconsPanelWidth};
  text-align: center;
  position: absolute;
  right: ${AppHeaderDimensions.viewportEmptySpace};
  display: inline-block;
`;

const InputWrapper = styled.div`
  position: absolute;
  right: ${AppHeaderDimensions.rightIconsPanelWidth};
  top: 12px;
  width: ${AppHeaderDimensions.inputWrapperWidth};
  right: 0;
  width: 600px;

  ${media.desktop`
  right: 0;
  width: 700px;
    `};


  ${media.giant`
  right: 0;
  width: ${AppHeaderDimensions.inputWrapperWidth};
    `};

  ${media.giant`
  right: 0;
  width: ${AppHeaderDimensions.inputWrapperWidth};
    `};

  ${media.giantXl`
  right: calc(${AppHeaderDimensions.viewportEmptySpace} * 2);
  width: ${AppHeaderDimensions.inputWrapperWidth};
    `};

  ${media.giantXlAppUsage`
  right: calc(${AppHeaderDimensions.viewportEmptySpace} * 2 + ${AppHeaderDimensions.rightIconsPanelWidth});
  width: ${AppHeaderDimensions.inputWrapperWidth};
    `};
`;

const SearchImg = styled.img`
  left: 12px;
  top: 3px;
  position: relative;
  display: inline;
`;

export const CustomImg = styled.img`
  margin: 0 10px;
`;

const AppLogo = styled.img`
  position: absolute;
  left: ${AppHeaderDimensions.viewportEmptySpace};
  top: 5px;
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
  width: 64%;
  outline: none;
  ${inputBorder()};
  ${media.desktop`
  width: 60%;
    `};
`;

const ExpandedMenuWrapper = styled.div`
  position: absolute;
  left: 100px;
  top: ${ExpandedMenuDimensions.topSpace};
  padding-top: 6px;
`;
const ExpandedMenuButton = styled.div`
  cursor: pointer;
  width: 200px;

  & ${CustomImg}:nth-child(1) {
    position: relative;
    top: 4px;
    padding-right: 10px;
  }
  & ${CustomImg}:nth-child(3) {
    position: absolute;
    right: 0;
    top: 16px;
  }
`;

export interface AppHeaderProps {
  user: User;
}

export const AppHeader: FC<AppHeaderProps> = (props) => {
  const [dropdownWrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

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
          <CustomInput type="text" placeholder="Search" />
          <SearchImg src="./media/icons/search.png" />
        </InputWrapper>
        <RightIconsPanel>
          <Link to = "/home"><CustomImg src="./media/icons/house.png" /></Link>
          <Link to = "/comments"><CustomImg src="./media/icons/comments.png" /></Link>
          <Link to = "/notifications"><CustomImg src="./media/icons/bell.png" /></Link>
          
          
          
        </RightIconsPanel>
      </InnerWrapper>
    </TopBarWrapper>
  );
};