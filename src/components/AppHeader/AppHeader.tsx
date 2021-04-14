import { FC } from "React";
import styled from "styled-components";

import { Wrapper, inputBorder, border, boxShadow } from "../../styledHelpers/Components";

import { Colors } from "../../styledHelpers/Colors";
import { ExpandedMenu } from "./ExpandedMenu";

//topbar style variables

export const barHeight = `60px`;
export const viewportEmptySpace = `20px`;
export const rightIconsPanelWidth = `140px`;

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
  width: 60%;
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

export const AppHeader: FC = () => {
  return (
    <TopBarWrapper>
      <InnerWrapper>
        <AppLogo src="./media/logo-min.png" />
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