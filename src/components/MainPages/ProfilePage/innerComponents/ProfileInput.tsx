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
  color: ${Colors.editData};
  font-weight: 500;
  background-color: ${Colors.edit};
  border-radius: 5px;

  position: relative;
`;
const Label = styled.div<{ slim?: boolean }>`
  font-size: ${fontSize[18]};
  content: "";
  padding: 5px;
  min-height: 20px;
  font-weight: ${(props) => (props.slim ? 400 : 600)};
`;

export interface ProfileInputProps {
  id?: string;
  isInput?: boolean;
  text?: string;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
  slim?: boolean;
  index?: number;
  dataType?: string;
  type?: string;

  column?: number;
  row?: number;
}

const ProfileInput: FC<ProfileInputProps> = ({
  id,
  isInput,
  text,
  change,
  slim,
  index,
  dataType,
  type,
  column,
  row,
}) => {
  const inputAttachment = (
    <Input
      type={type}
      id={id}
      name="attach"
      accept="image/*,.pdf"
      onChange={change}
      data-type={dataType}
    />
  );

  const input = (
    <Input
      placeholder={id ? `${id}...` : "write..."}
      id={id}
      value={text}
      onChange={change}
      data-index={index}
      data-type = {dataType}
      data-column = {column}
      data-row = {row}
    />
  );

  const label = <Label slim={slim}>{text}</Label>;

  return <>{type === "file"?inputAttachment:(isInput ? input : label)}</>;
};

export default ProfileInput;
