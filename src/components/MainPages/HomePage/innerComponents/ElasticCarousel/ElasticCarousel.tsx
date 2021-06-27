import { FC } from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

import { Card } from "./Card";

import { Wrapper } from "../../../../../styledHelpers/Components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { CarouselDimensions } from "../../../../../styledHelpers/commonVariables";
import { fontSize } from "../../../../../styledHelpers/FontSizes";
import { PeopleIconSVG, PlusIconSVG, CommentsIconSVG, EntitiesIconSVG } from "../../../../../styledHelpers/Icons";

const CarouselWrapper = styled(Wrapper)`
  position: absolute;
  top: calc(400px + ${CarouselDimensions.carouselTopSpace});
  height: ${CarouselDimensions.carouselHeight};
  width: 100%;
  text-align: left;
`;
const CarouselTitle = styled(Wrapper)`
  position: absolute;
  top: 20px;
  left: 16px;
  height: 20px;
  font-size: ${fontSize[20]};
  width: 100%;
  justify-content: left;
`;
const CarouselComponent = styled(Carousel)`
  width: 100%;
  position: absolute;
  top: 60px;
  .rec-arrow {
    background-color: ${Colors.backgroundgray};
    color: ${Colors.fontblue};
    border: none;
  }
  .rec-arrow:hover {
    transform: scale(1.1);
    background-color: ${Colors.backgroundgray};
    color: ${Colors.fontblue};
  }
  .rec-arrow:disabled {
    color: ${Colors.lightgray};
    transform: none;
  }
  .rec-arrow:focus {
    background-color: ${Colors.backgroundgray};
    color: ${Colors.fontblue};
    transform: none;
    transform: scale(1.1);
  }
`;

export const ElasticCarousel: FC = () => {
  const peopleIcon = <PeopleIconSVG width={60} height={60} fill="#878B91"/>;
  const plusIcon = <PlusIconSVG width={60} height={60} fill="#878B91"/>;
  const commentsIcon = <CommentsIconSVG width={60} height={60} fill="#878B91"/>;
  const entitiesIcon = <EntitiesIconSVG width={60} height={60} fill="#878B91"/>;
  
  return (
    <CarouselWrapper>
      <CarouselTitle>Workspaces</CarouselTitle>
      <CarouselComponent
        isRTL={false}
        pagination={false}
        itemsToShow={4.7}
        itemsToScroll={1.3}
        showArrows={true}
      >
        <Card
          cardNumber={1}
          imgSrc={"./media/workspaces/documents2.jpeg"}
          title="Client contract"
          type="Contract"
          numberOfUsers={150}
          icon={commentsIcon}
        ></Card>
        <Card
          cardNumber={2}
          imgSrc={"./media/workspaces/documents2.jpeg"}
          title="Supplier contract"
          type="Contract"
          numberOfUsers={25}
          icon={commentsIcon}
        ></Card>
        <Card
          cardNumber={3}
          imgSrc={"./media/workspaces/corporate.jpg"}
          title="Corporate"
          type="Corporate"
          numberOfUsers={25}
          icon={entitiesIcon}
        ></Card>
        <Card
          cardNumber={4}
          imgSrc={"./media/workspaces/norms.jpg"}
          title="Group Norms"
          type="Norms"
          numberOfUsers={25}
          icon={peopleIcon}
        ></Card>
        <Card
          cardNumber={5}
          imgSrc={"./media/workspaces/documents2.jpeg"}
          title="Real Estate contracts"
          type="Contract"
          numberOfUsers={25}
          icon={commentsIcon}
        ></Card>
        <Card
          cardNumber={6}
          imgSrc={"./media/workspaces/new-contract.jpg"}
          title="Empty contract slot"
          type="None"
          numberOfUsers={0}
          icon={plusIcon}
        ></Card>
      </CarouselComponent>
    </CarouselWrapper>
  );
};
