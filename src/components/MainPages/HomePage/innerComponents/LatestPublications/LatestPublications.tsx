import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../../../../styledHelpers/Colors";

import { Wrapper, boxShadow, cannotSelect } from "../../../../../styledHelpers/Components";
import { fontSize } from "../../../../../styledHelpers/FontSizes";
import { Publication } from "./Publication";
import { PickedContent } from "./PickedContent";
import { User } from "../../../../../redux/types/User";

const LatestPublicationsWrapper = styled(Wrapper)`
  height: 400px;
  max-height: 400px;
  overflow: hidden;
  ${boxShadow(0, 0, 10, -3)};
`;
const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
`;
const ContentWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 400px;
  height: calc(400px - (2 * 20px));
  width: calc(100% - 400px - (2 * 20px));
  background-color: ${Colors.white};
  padding: 20px;
`;
const ContentHeader = styled.header`
  height: 40px;
  font-size: ${fontSize[20]};
`;
const Content = styled.div`
  height: 284px;
  font-size: ${fontSize[20]};
  div:nth-child(1) {
    margin-bottom: 7px;
  }
  div:nth-child(2) {
    margin-bottom: 7px;
  }
`;
const MorePublicationsLink = styled(Link)`
  position: absolute;
  color: ${Colors.blue};
  height: 16px;
  padding-top: 20px;
  bottom: 20px;
  text-decoration: none;
  text-align: bottom;
  font-size: ${fontSize[16]};
  ${cannotSelect()};
`;

export const LatestPublications: FC = () => {
  const [user, setUser] = useState({} as User);

  const publicationDate = new Date(2010, 11, 17);
  const publicationsText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla ultricies magna bibendum elementum. Nullam vestibulum eros egestas auctor tincidunt.";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/6")
      .then((response) => response.json())
      .then((json) => {
        setUser({ id: json.id, name: json.name, company: json.company.name, city: json.address.city, email: json.email, phone: json.phone });
      });
  });

  return (
    <LatestPublicationsWrapper>
      <Picture src="./media/city.jpg" />
      <PickedContent
        author={user}
        date={publicationDate}
        text={publicationsText}
      />
      <ContentWrapper>
        <ContentHeader> Latest publications</ContentHeader>
        <Content>
          <Publication
            author={user}
            date={publicationDate}
            text={publicationsText}
          />
          <Publication
            author={user}
            date={publicationDate}
            text={publicationsText}
          />
          <Publication
            author={user}
            date={publicationDate}
            text={publicationsText}
          />
        </Content>
        <MorePublicationsLink to="/publications">
          See more publications
        </MorePublicationsLink>
      </ContentWrapper>
    </LatestPublicationsWrapper>
  );
};
