import { FC } from "React";
import styled from "styled-components";

import { Wrapper, inputBorder, border, boxShadow } from "../../styledHelpers/Components";

import { Colors } from "../../styledHelpers/Colors";
import { ExpandedMenu } from "./ExpandedMenu";
import useDropdown from "react-dropdown-hook";

//topbar style variables

export const barHeight = `60px`;
export const viewportEmptySpace = `20px`;
export const rightIconsPanelWidth = `140px`;
export const inputWrapperWidth = `1000px`;

//-----------------------

const TopBarWrapper = styled(Wrapper)`
  position: absolute;
  left: 0;
  top: 0;
  height: ${barHeight}; //set height to 50px
  width: 100%;
  ${boxShadow(0, 0, 13, -3)}
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.white};
  position: relative;
  ${border(1, 'solid', Colors.lightgray, 'bottom')}
`;

const RightIconsPanel = styled.div`
  top: ${viewportEmptySpace};
  width: ${rightIconsPanelWidth};
  text-align: center;
  position: absolute;
  right: ${viewportEmptySpace};
  display: inline-block;
`;

const InputWrapper = styled.div`
  position: absolute;
  right: calc(${viewportEmptySpace} * 2 + ${rightIconsPanelWidth});
  top: 12px;
  width: ${inputWrapperWidth};
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
  left: ${viewportEmptySpace};
  top: 5px;
  overflow: hidden;
`;

const CustomInput = styled.input`
  background: ${Colors.white};
  height: 32px;
  position: relative;
  text-align: center;
  width: 60%;
  outline: none;
  ${inputBorder()};
`;

const ExpandedMenuWrapper = styled.div`
  position: absolute;
  left: 100px;
  top: 12px;
`;
const ExpandedMenuButton = styled.div`
cursor: pointer;
width: 200px;

& ${CustomImg}:nth-child(1){
  position: relative;
  top: 4px;
  padding-right: 10px;
}
& ${CustomImg}:nth-child(3){
  position: absolute;
  right: 0;
  top: 12px;
}
`;

export const AppHeader: FC = () => {

  const [dropdownWrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const menuHandle = () => {
    toggleDropdown();
  };

  return (
    <TopBarWrapper>
      <InnerWrapper>
        <AppLogo src="./media/logo-min.png" />
        <ExpandedMenuWrapper ref={dropdownWrapperRef}>
          <ExpandedMenuButton onClick = {menuHandle}>
            <CustomImg src="./media/icons/house.png"/>
            <span>Home</span>
            <CustomImg src="./media/icons/arrow-down.png"/>
          </ExpandedMenuButton>
          {dropdownOpen && <ExpandedMenu/>}
        </ExpandedMenuWrapper>
        <InputWrapper>
          <CustomInput type="text" placeholder="Search"/>
          <SearchImg src="./media/icons/search.png" />
        </InputWrapper>
        <RightIconsPanel>
          <CustomImg src="./media/icons/house.png" />
          <CustomImg src="./media/icons/comments.png" />
          <CustomImg src="./media/icons/bell.png" />
        </RightIconsPanel>
      </InnerWrapper>
    </TopBarWrapper>
  );
};