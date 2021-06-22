import { FC } from "react";
import styled from "styled-components";
import { DisplayStyle } from "../../../../models/enums/DisplayStyle";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { Wrapper } from "../../../../styledHelpers/Components";
import Entity from "./Entity";

const InnerWrapper = styled(Wrapper)<{displayStyle: DisplayStyle}>`
  display: grid;
  grid-template-columns: ${props => props.displayStyle === DisplayStyle.mosaic ? 'repeat(4, 1fr)' : '1fr'};
  padding: 20px;
  gap: 20px;
`;

export interface EntitiesBoardProps {}

const EntitiesBoard: FC<EntitiesBoardProps> = () => {
  const state = useAppSelector((state) => {
    const entities = state.entities.entities;
    const isSorted = state.entities.isSorted;
    const filter = state.filterComponents.entitiesFilter;
    const displayStyle = state.entities.displayStyle;
    
    const entitiesSorted = [...entities].sort();
    return { entities, isSorted, filter, entitiesSorted, displayStyle };
  });

  const data = state.isSorted ? state.entities : state.entitiesSorted;

  return (
    <InnerWrapper displayStyle = {state.displayStyle}>
      {data.map((item: string, index: number) => {
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
