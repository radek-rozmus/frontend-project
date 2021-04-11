import { FC } from "React";
import styled from "styled-components";

import { Wrapper, border } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
import { ExpandedMenu } from "./ExpandedMenu";

const BarWrapper = styled(Wrapper)`

`;

const InnerWrapper = styled.div`
  width: 100%;
  background: ${Colors.white};
  ${border()};
  display: inline-block;
`;

const RightIcons = styled.div`
display: inline-block;
`;

const InputWrapper = styled.div`
display: inline-block;
`;

const CustomImg = styled.img`
display: inline-block;
`;

const CustomLogo= styled.img`
height: 50px;
overflow: hidden;
display: inline-block;
`;

const CustomInput = styled.input`
  background: red;
  display: inline-block;
`;

export const TopBar: FC = () => {
  return (
    <BarWrapper>
      <InnerWrapper>
        <CustomLogo src="./media/logo.png" />
          <ExpandedMenu/>
        <InputWrapper>
          <CustomInput type="text" />
          <input type="text" />
          <CustomImg src="./media/icons/search.png" />
        </InputWrapper>
        <RightIcons>
          <CustomImg src="./media/icons/house.png" />
          <CustomImg src="./media/icons/comments.png" />
          <CustomImg src="./media/icons/bell.png" />
        </RightIcons>
      </InnerWrapper>
    </BarWrapper>
  );
};
