import {FC} from "react";
import styled from "styled-components";

import ProfileButton from "./ProfileButton";

import { GrEdit } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

import { toggleDetailsIsEditing } from "../../../../redux/actions/profilePageActions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import BasicDetails from "./BasicDetails";
import PanelInformations from "./PanelInformations";
import DetailsTables from "./DetailsTables";

const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const ProfileEditButton = styled(ProfileButton)``;

export interface UserDataProps {}

const UserDetails: FC<UserDataProps> = () => {
  const state = useAppSelector((state) => {
    const user = state.userAccount.user;
    const isDetailsEditing = state.profile.isDetailsEditing;

    return { user, isDetailsEditing };
  });

  const dispatch = useAppDispatch();
  const handleToggleDataIsEditing = () => {
    dispatch(toggleDetailsIsEditing());
  };

  return (
    <InnerWrapper>
      <BasicDetails/>
      <PanelInformations/>
      <DetailsTables/>
      <ProfileEditButton
          size="sm"
          rightCorner
          click={handleToggleDataIsEditing}
        >
          {state.isDetailsEditing ? <TiDeleteOutline /> : <GrEdit />}
        </ProfileEditButton>
    </InnerWrapper>
  );
};

export default UserDetails;
