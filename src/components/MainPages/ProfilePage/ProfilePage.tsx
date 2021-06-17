import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { border, boxShadow, Page } from "../../../styledHelpers/Components";
import UserData from "./innerComponents/UserData";
import UserDetails from "./innerComponents/UserDetails";



const PageInnerWrapper = styled(Page)`
  background-color: ${Colors.white};
  ${boxShadow(0, 0, 10, -3)};
`;
const UserProfileData = styled.div`
  display: flex;
  height: 199px;
  ${border(1, "solid", Colors.lightgray, "bottom")};
`;
const UserProfileDetails = styled.div`
  position: flex !important;
  flex-direction: column;
  min-height: 320px;
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
  width: 100%;
  height: 64px;
  padding-top: 6px;
  color: ${Colors.blue};
`;

//content

export interface PageProfileProps {}

export const ProfilePage: FC<PageProfileProps> = () => {

  return (
    <PageInnerWrapper>
      <UserProfileData>
        <UserLink to="/profile">
          <UserImg src={"./media/user-photo.jpg"} />
          <SeeProfile>See Profile</SeeProfile>
        </UserLink>
        <UserData/>
      </UserProfileData>
      <UserProfileDetails>
      <UserDetails/>
      </UserProfileDetails>
    </PageInnerWrapper>
  );
};
