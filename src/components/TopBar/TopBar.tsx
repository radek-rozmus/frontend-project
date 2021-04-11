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
`;

const RightIcons = styled.div`
float: right;
`;

const InputWrapper = styled.div`
display: inline-block;
`;

const CustomImg = styled.img``;

const CustomLogo= styled.img`
height: 50px;
overflow: hidden;
`;

const CustomInput = styled.input`
  background: red;
`;

export const TopBar: FC = () => {
  return (
    <BarWrapper>
      <InnerWrapper>
        <CustomLogo src="./media/logo.png" />
        <div>
          <ExpandedMenu />
        </div>
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
