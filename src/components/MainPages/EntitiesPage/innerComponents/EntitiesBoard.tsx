import { FC } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { Wrapper } from "../../../../styledHelpers/Components";
import Entity from "./Entity";

const InnerWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px;
  gap: 20px;
`;

export interface EntitiesBoardProps {}

const EntitiesBoard: FC<EntitiesBoardProps> = () => {
  const state = useAppSelector((state) => {
    const entities = state.entities.entities;
    const filter = state.filterComponents.entitiesFilter;
    return { entities, filter };
  });

  return (
    <InnerWrapper>
      {state.entities.map((item: string, index: number) => {
        if (item.includes(state.filter)) {
          return (
              <Entity text={item} key={index} />
          );
        } else return null;
      })}
    </InnerWrapper>
  );
};

export default EntitiesBoard;
