import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { fontSize } from "../../../../styledHelpers/FontSizes";

const Button = styled.button<{size: string, rightCorner: boolean}>`
background: transparent;
border: none;
outline: none;
color: ${Colors.fontblue};
display: flex;
justify-content: center;
align-items: center;
width: ${(props) => props.size === 'sm'?'80px':'220px'};
font-size: ${fontSize[20]};
padding: 10px;
cursor: pointer;

position: ${(props) => props.rightCorner?'absolute':'relative'};
right: ${(props) => props.rightCorner?'0':null};
top: ${(props) => props.rightCorner?'0':null};

`;

const TextSpan = styled.span`
margin-left: 12px;
`;

export interface ProfileButtonProps {
  children:  React.ReactNode,
  text?: string;
  size?: 'sm' | 'md';
  rightCorner?: boolean;
  click?: () => void;
}

const ProfileButton: FC<ProfileButtonProps> = ({ children, size = 'md', text = null, rightCorner=false, click}) => {
  return (
    <Button size = {size} rightCorner = {rightCorner} onClick = {click}>
      {children}
      {text?<TextSpan>{text}</TextSpan>:null}
    </Button>
  );
};

export default ProfileButton;
