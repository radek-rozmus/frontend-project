import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styledHelpers/Colors";

import { Wrapper } from "../../../../../styledHelpers/Components";
import { fontSize } from "../../../../../styledHelpers/FontSizes";
import { User } from "../../../../../models/types/User";
import { LatestPublicationsDimensions } from "../../../../../styledHelpers/commonVariables";

export interface PublicationProps {
  date: Date;
  author: User;
  text: string;
}

const PublicationWrapper = styled(Wrapper)`
  justify-content: left;
  position: relative;
  width: 100%;
  height: ${LatestPublicationsDimensions.publicationImageDimensions};
  overflow: hidden;
  font-size: ${fontSize[16]};
`;
const PublicationImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: ${LatestPublicationsDimensions.publicationImageDimensions};
  height: ${LatestPublicationsDimensions.publicationImageDimensions};
`;
const PublicationContent = styled.div`
  position: absolute;
  top: 0;
  left: ${LatestPublicationsDimensions.publicationImageDimensions};
  height: 60px;
  width: calc(100% - 90px - 10px);
  padding-left: 10px;
  line-height: 24px;
  overflow: hidden;
`;

const PublicationData = styled.div`
  position: absolute;
  display: inline-block;
  top: 60px;
  left: ${LatestPublicationsDimensions.publicationImageDimensions};
  height: 30px;
  width: calc(
    100% - ${LatestPublicationsDimensions.publicationImageDimensions} - 10px
  );
  padding: 0;
  padding-left: 10px;
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

export const Publication: FC<PublicationProps> = (props) => {
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
    <PublicationWrapper>
      <PublicationImg src="./media/documents.jpg" />
      <PublicationContent>{props.text}</PublicationContent>
      <PublicationData>
        <DateOfPublication>{`${day} ${month}, ${year}`}</DateOfPublication>
        <UserImg src="./media/user-photo1.jpg" />
        <NameOfAuthor>{props.author.name}</NameOfAuthor>
      </PublicationData>
    </PublicationWrapper>
  );
};
