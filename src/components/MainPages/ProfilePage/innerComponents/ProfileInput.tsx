import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { fontSize } from "../../../../styledHelpers/FontSizes";

const Input = styled.input`
  font-size: ${fontSize[18]};
  padding: 5px;
  border: none;
  min-height: 20px;
  outline: none;
  color: ${Colors.fontblue};
  font-weight: 500;
  background-color: ${Colors.edit};
`;
const Label = styled.div<{ slim?: boolean }>`
  font-size: ${fontSize[18]};
  content: "";
  padding: 5px;
  min-height: 20px;
  font-weight: ${(props) => (props.slim ? 400 : 600)};
`;

export interface ProfileInputProps {
  id: string;
  isInput: boolean;
  text: string;
  change: (event: ChangeEvent<HTMLInputElement>) => void;
  slim?: boolean;
}

const ProfileInput: FC<ProfileInputProps> = ({
  id,
  isInput,
  text,
  change,
  slim,
}) => {
  return (
    <>
      {isInput ? (
        <Input
          placeholder={`${id}...`}
          id={id}
          value={text}
          onChange={change}
        />
      ) : (
        <Label slim={slim}>{text}</Label>
      )}
    </>
  );
};

export default ProfileInput;
