import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { Colors } from "../../../../styledHelpers/Colors";
import { border } from "../../../../styledHelpers/Components";
import { fontSize } from "../../../../styledHelpers/FontSizes";
import ProfileButton from "./ProfileButton";
import ProfileInput from "./ProfileInput";

import { BsPerson } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

const DataTitle = styled.div`
    position: relative;
    left: 20px;
    top: 12px;
    color: ${Colors.grayLighter};
  `;

const InnerWrapper = styled.div`
  min-height: 400px;
  font-size: ${fontSize[18]};
  ${border(1, "solid", Colors.lightgray, "bottom")};
`;

const PanelInformationsTitle = styled(DataTitle)<{ height?: string }>`
  color: ${Colors.fontblue};
  height: ${(props) => (props.height ? props.height : "60px")};
  display: flex;
  align-items: center;
`;
const PanelInformationsSubtitle = styled(DataTitle)`
  color: ${Colors.grayLighter};
  font-weight: 400;
`;
const ProfileDetailsInput = styled(ProfileInput)``;

const Data = styled.div<{ noTop?: boolean }>`
  min-height: 50px;
  position: relative;
  left: 20px;
  top: ${(props) => (props.noTop ? 0 : "12px")};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  column-gap: 20px;
  row-gap: 8px;
`;

//correspondant
const Correspondant = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
`;
const CorrespondantData = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  left: 12px;
`;
const CorrespondantImg = styled.img`
width: 30px;
height: 30px;
border-radius: 200px;
left: 12px;
`;
const CorrespondantName = styled.div``;
const CorrespondantButton = styled(ProfileButton)``;

const PanelInformations: FC = () => {
  const state = useAppSelector((state) => {
    const user = state.userAccount.user;
    const isDetailsEditing = state.profile.isDetailsEditing;
    const correspondants = [
      state.userAccount.users[8],
      state.userAccount.users[9],
    ];

    return { user, isDetailsEditing, correspondants };
  });

  const defaultInformations = {
    fee: `610$/hour (Negotiated)`,
    termsAndConditions: "Monthly 10k$ retainer - see with Jeanny Smith",
    servicesAndProjects: "Corporate M&A and International acquisitions",
  };
  const [informations, setInformations] = useState(defaultInformations);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    let newInformations;
    switch (event.target.dataset.type) {
      case "fee":
        newInformations = { ...informations };
        newInformations.fee = event.target.value;
        setInformations(newInformations);
        break;
      case "termsAndConditions":
        newInformations = { ...informations };
        newInformations.termsAndConditions = event.target.value;
        setInformations(newInformations);
        break;
      case "servicesAndProjects":
        newInformations = { ...informations };
        newInformations.servicesAndProjects = event.target.value;
        setInformations(newInformations);
        break;
    }
  };

  return (
    <InnerWrapper>
      <PanelInformationsTitle>Panel informations</PanelInformationsTitle>
      <PanelInformationsSubtitle>Hourly fee</PanelInformationsSubtitle>
      <Data>
        <ProfileDetailsInput
          isInput={state.isDetailsEditing}
          text={informations.fee}
          change={handleChangeInputValue}
          slim
          dataType="fee"
        ></ProfileDetailsInput>
      </Data>
      <PanelInformationsSubtitle>
        {"Terms & conditions"}
      </PanelInformationsSubtitle>
      <Data>
        <ProfileDetailsInput
          isInput={state.isDetailsEditing}
          text={informations.termsAndConditions}
          change={handleChangeInputValue}
          slim
          dataType="termsAndConditions"
        ></ProfileDetailsInput>
      </Data>
      <Data>
        <ProfileDetailsInput
          slim
          type="file"
          id="attachment"
        ></ProfileDetailsInput>
      </Data>
      <PanelInformationsTitle>{"Services & projects"}</PanelInformationsTitle>
      <Data noTop>
        <ProfileDetailsInput
          isInput={state.isDetailsEditing}
          text={informations.servicesAndProjects}
          change={handleChangeInputValue}
          slim
          dataType="servicesAndProjects"
        ></ProfileDetailsInput>
      </Data>
      <PanelInformationsTitle height="60px">
        Internal correspondants
      </PanelInformationsTitle>
      <Data noTop>
        <Correspondant>
          <CorrespondantData>
            <CorrespondantImg src={"./media/user-photo1.jpg"} />
            <CorrespondantName>
              {state.correspondants[0].name}
            </CorrespondantName>
          </CorrespondantData>
          <CorrespondantButton text={"Message"}>
            <FaRegComment />
          </CorrespondantButton>
          <CorrespondantButton text={"Account"}>
            <BsPerson />
          </CorrespondantButton>
        </Correspondant>
        <Correspondant>
          <CorrespondantData>
            <CorrespondantImg src="./media/user-photo1.jpg"/>
            <CorrespondantName>
              {state.correspondants[1].name}
            </CorrespondantName>
          </CorrespondantData>
          <CorrespondantButton text={"Message"}>
            <FaRegComment />
          </CorrespondantButton>
          <CorrespondantButton text={"Account"}>
            <BsPerson />
          </CorrespondantButton>
        </Correspondant>
      </Data>
    </InnerWrapper>
  );
};

export default PanelInformations;
