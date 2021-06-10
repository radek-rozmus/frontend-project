import { ChangeEvent, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProfileInput from "./ProfileInput";
import ProfileButton from "./ProfileButton";

import { FaRegComment } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { IoMdGitPullRequest } from "react-icons/io";
import { RiDeleteBack2Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";


import { toggleDataIsEditing } from "../../../../redux/actions/profilePageActions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { fontSize } from "../../../../styledHelpers/FontSizes";

const InnerWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
`;
const UserDataButtons = styled.div`
  width: 100%;
  height: 43px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
`;
const ProfileExitButton = styled(ProfileButton)``;
const ProfileEditButton = styled(ProfileButton)`
  button {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
const UserDataBlock = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 43px;
  height: calc(100% - 43px);
  font-size: ${fontSize[18]};

  display: flex;
  justify-content: space-around;
`;
const UserBasicData = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;
const UserContactData = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export interface UserDataProps {}

const UserData: FC<UserDataProps> = () => {
  const state = useAppSelector((state) => {
    const user = state.userAccount.user
    const isDataEditing = state.profile.isDataEditing;

    return { user, isDataEditing };
  });

  const dispatch = useAppDispatch();
  const handleToggleDataIsEditing = () => {
    dispatch(toggleDataIsEditing());
  };
  const [userDataLocal, setUserDataLocal] = useState({
      name: "",
      company: "",
      city: "",
      role: "Partner",

      email: "",
      phone: "",
  });

  useEffect(() => {
    setUserDataLocal(prevState => {
        return{
          ...prevState,
            name: state.user.name,
            company: state.user.company,
            city: state.user.city,

      email: state.user.email,
      phone: state.user.phone,
        }
    })
  }, [state.user.city, state.user.company, state.user.email, state.user.name, state.user.phone])

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setUserDataLocal(prevState => {
        return{
             ...prevState,
             [event.target.id]: event.target.value
        }
     })
  }

  return (
    <InnerWrapper>
      <UserDataButtons>
        <ProfileButton text="Message">
          <FaRegComment />
        </ProfileButton>
        <ProfileButton text="Create a request">
          <IoMdGitPullRequest />
        </ProfileButton>
        <ProfileButton text="Add to cluster">
          <BiBriefcase />
        </ProfileButton>
        <Link to="/">
          <ProfileExitButton size="sm">
            <RiDeleteBack2Line />
          </ProfileExitButton>
        </Link>
      </UserDataButtons>
      <UserDataBlock>
        <UserBasicData>
          <ProfileInput id = {'name'} isInput={state.isDataEditing} text={userDataLocal.name} change = {handleChangeInputValue}/>
          <ProfileInput id = {'company'} isInput={state.isDataEditing} text={userDataLocal.company} change = {handleChangeInputValue}/>
          <ProfileInput id = {'city'} isInput={state.isDataEditing} text={userDataLocal.city} change = {handleChangeInputValue} slim/>
          <ProfileInput id = {'role'} isInput={state.isDataEditing} text={userDataLocal.role} change = {handleChangeInputValue} slim/>
        </UserBasicData>
        <UserContactData>
          <ProfileInput id = {'email'} isInput={state.isDataEditing} text={userDataLocal.email} change = {handleChangeInputValue} slim/>
          <ProfileInput id = {'phone'} isInput={state.isDataEditing} text={userDataLocal.phone} change = {handleChangeInputValue} slim/>
        </UserContactData>
        <ProfileEditButton size="sm" rightCorner click={handleToggleDataIsEditing}>
          {state.isDataEditing?<TiDeleteOutline/>:<GrEdit />}
        </ProfileEditButton>
      </UserDataBlock>
    </InnerWrapper>
  );
};

export default UserData;
