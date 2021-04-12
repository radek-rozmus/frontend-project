import { FC } from "React";
import styled from "styled-components";

import { Wrapper, border, inputBorder } from "../../styledHelpers/Components";

import { Colors } from "../../styledHelpers/Colors";
import { ExpandedMenu } from "./ExpandedMenu";

//topbar style variables

export const barHeight = `50px`;
export const viewportEmptySpace = `14px`;
export const rightIconsPanelWidth = `120px`;

//-----------------------

const TopBarWrapper = styled(Wrapper)`
  position: absolute;
  left: 0;
  top: 0;
  height: ${barHeight}; //set height to 50px
  width: 100%;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.white};
  position: relative;
  ${border()}
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
  top: 10px;
  width: 60%;
`;

const SearchImg = styled.img`
  left: 12px;
  top: 3px;
  position: relative;
  display: inline;
`;

const CustomImg = styled.img`
  margin: 0 6px;
`;

const AppLogo = styled.img`
  position: absolute;
  left: ${viewportEmptySpace};
  top: 5px;
  height: 40px;
  overflow: hidden;
`;

const CustomInput = styled.input`
  background: ${Colors.white};
  height: 26px;
  position: relative;
  text-align: center;
  width: 60%;
  outline: none;
  ${inputBorder()};
`;

export const AppHeader: FC = () => {
  return (
    <TopBarWrapper>
      <InnerWrapper>
        <AppLogo src="./media/logo.png" />
        <ExpandedMenu />
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