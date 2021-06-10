import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { Colors } from "../../../styledHelpers/Colors";
import { LeftBarDimensions } from "../../../styledHelpers/commonVariables";
import { border, boxShadow, Page } from "../../../styledHelpers/Components";
import UserData from "./innerComponents/UserData";



const PageInnerWrapper = styled(Page)`
  background-color: ${Colors.white};
  ${boxShadow(0, 0, 10, -3)};
`;
const UserProfileData = styled.div`
  display: flex;
  height: 199px;
  ${border(1, "solid", Colors.lightgray, "bottom")};
`;
const UserProfileDetail = styled.div`
  position: flex !important;
  flex-direction: column;
  height: 320px;
  //${border(1, "solid", Colors.lightgray, "bottom")};
`;

const UserLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 20%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserImg = styled.img`
  border-radius: 200px;
  width: 70px;
  height: 70px;
  position: relative;
  top: 24px;
`;

const SeeProfile = styled.div`
  text-align: center;
  position: relative;
  top: 32px;
  width: ${LeftBarDimensions.userTileDimensions};
  height: 64px;
  padding-top: 6px;
  color: ${Colors.blue};
`;

//content

export interface PageProfileProps {}

export const ProfilePage: FC<PageProfileProps> = () => {
  const state = useAppSelector((state) => {
    const user = state.userAccount.user;
    const profile = state.profile;
    return { user, profile };
  });


  return (
    <PageInnerWrapper>
      <UserProfileData>
        <UserLink to="/profile">
          <UserImg src={"./media/user-photo.jpg"} />
          <SeeProfile>See Profile</SeeProfile>
        </UserLink>
        <UserData/>
      </UserProfileData>
      <UserProfileDetail></UserProfileDetail>
    </PageInnerWrapper>
  );
};
