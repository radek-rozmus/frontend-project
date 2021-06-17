import { FC} from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styledHelpers/Colors";

import { Wrapper } from "../../../../../styledHelpers/Components";
import { fontSize } from "../../../../../styledHelpers/FontSizes";
import { User } from "../../../../../models/types/User";

const PickedContentInnerWrapper = styled(Wrapper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  background: linear-gradient(to top, rgba(20, 38, 82), rgba(0, 0, 0, 0));
  justify-content: left;
  text-align: left;
`;
const PublicationWrapper = styled(Wrapper)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 160px;
  justify-content: left;
  overflow: hidden;
  font-size: ${fontSize[14]};
`;
const PublicationContent = styled.div`
  position: absolute;
  left: 16px;
  height: 130px;
  width: calc(100% - 32px);
  line-height: 24px;
  overflow: hidden;
  color: ${Colors.lightgray};
`;
const PublicationData = styled.div`
  position: relative;
  display: inline-block;
  top: 110px;
  left: 16px;
  height: 30px;
  width: calc(100% - 32px);
  line-height: 24px;
  overflow: hidden;
  margin: 0;
  color: ${Colors.grayLighter};
`;

const UserImg = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  display: inline-block;
  left: 12px;
  border-radius: 200px;
`;
const DateOfPublication = styled.div`
  position: relative;
  display: inline-block;
  bottom: 10px;
  font-weight: 400;
`;
const NameOfAuthor = styled.div`
  position: relative;
  display: inline-block;
  bottom: 10px;
  left: 24px;
  font-weight: 400;
`;

export interface PickedContentProps {
  date: Date;
  author: User;
  text: string;
}

export const PickedContent: FC<PickedContentProps> = (props) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = props.date.getDate();
  const month = monthNames[props.date.getMonth()];
  const year = props.date.getFullYear();

  return (
    <PickedContentInnerWrapper>
      <PublicationWrapper>
      <PublicationContent>{props.text}</PublicationContent>
        <PublicationData>
          <DateOfPublication>{`${day} ${month}, ${year}`}</DateOfPublication>
          <UserImg src="./media/user-photo1.jpg" />
          <NameOfAuthor>{props.author.name}</NameOfAuthor>
        </PublicationData>
      </PublicationWrapper>
    </PickedContentInnerWrapper>
  );
};
