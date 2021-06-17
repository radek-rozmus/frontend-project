import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { Colors } from "../../../../styledHelpers/Colors";
import { border} from "../../../../styledHelpers/Components";
import { fontSize } from "../../../../styledHelpers/FontSizes";
import ProfileInput from "./ProfileInput";

const InnerWrapper = styled.div`
    ${border(1, "solid", Colors.lightgray, "bottom")};
  `;

const DataTitle = styled.div`
    position: relative;
    left: 20px;
    top: 12px;
    color: ${Colors.grayLighter};
  `;

  const DataBlock = styled.div`
    min-height: 80px;
    font-size: ${fontSize[18]};
  `;
  const Data = styled.div`
    min-height: 50px;
    position: relative;
    left: 20px;
    top: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 80%;
    column-gap: 20px;
    row-gap: 8px;
  `;

const BasicDetails: FC = () => {

  const state = useAppSelector((state) => {
    const user = state.userAccount.user;
    const isDetailsEditing = state.profile.isDetailsEditing;

    return { user, isDetailsEditing };
  });

  const defaultExpertise: string[] = ["Mergers and acquisition"];
  const [expertise, setExpertise] = useState(defaultExpertise);

  const defaultSpecialities: string[] = [
    "Cross border operation",
    "Transaction over 500M$",
  ];
  const [specialties, setSpecialities] = useState(defaultSpecialities);

  const defaultAdmission: string[] = [
    "Paris bar association",
    "Tunisian bar association",
  ];
  const [admission, setAdmission] = useState(defaultAdmission);

  const defaultCountries: string[] = ["Tunisia"];
  const [countries, setCountries] = useState(defaultCountries);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.dataset.index) {
      const index = +event.target.dataset.index;
      switch (event.target.dataset.type) {
        case "expertise":
          const newExpertise = [...expertise];
          newExpertise.splice(index, 1, event.target.value);
          setExpertise(newExpertise);
          break;
        case "specialties":
          const newSpecialities = [...specialties];
          newSpecialities.splice(index, 1, event.target.value);
          setSpecialities(newSpecialities);
          break;
        case "admission":
          const newAdmission = [...admission];
          newAdmission.splice(index, 1, event.target.value);
          setAdmission(newAdmission);
          break;
        case "countries":
          const newCountries = [...countries];
          newCountries.splice(index, 1, event.target.value);
          setCountries(newCountries);
          event.target.focus()
          break;
      }
    }
  };

  return (
    <InnerWrapper>
      <DataBlock>
        <DataTitle>Expertise</DataTitle>
        <Data>
          {expertise.map((item, index) => (
            <ProfileInput
              key={index}
              isInput={state.isDetailsEditing}
              text={item}
              change={handleChangeInputValue}
              slim
              index={index}
              dataType={"expertise"}
            />
          ))}
        </Data>
      </DataBlock>
      <DataBlock>
        <DataTitle>Specialties</DataTitle>
        <Data>
          {specialties.map((item, index) => (
            <ProfileInput
              key={index}
              isInput={state.isDetailsEditing}
              text={item}
              change={handleChangeInputValue}
              slim
              index={index}
              dataType={"specialties"}
            />
          ))}
        </Data>
      </DataBlock>
      <DataBlock>
        <DataTitle>Admission to practice law</DataTitle>
        <Data>
          {admission.map((item, index) => (
            <ProfileInput
              key={index}
              isInput={state.isDetailsEditing}
              text={item}
              change={handleChangeInputValue}
              slim
              index={index}
              dataType={"admission"}
            />
          ))}
        </Data>
      </DataBlock>
      <DataBlock>
        <DataTitle>Countries</DataTitle>
        <Data>
          {countries.map((item, index) => (
            <ProfileInput
              key={index}
              isInput={state.isDetailsEditing}
              text={item}
              change={handleChangeInputValue}
              slim
              index={index}
              dataType={"countries"}
            />
          ))}
        </Data>
      </DataBlock>
    </InnerWrapper>
  );
};

export default BasicDetails;
