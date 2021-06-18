import { FC } from "react";
import styled from "styled-components";
import { Wrapper } from "../../../../styledHelpers/Components";
import Entity from "./Entity";

const InnerWrapper = styled(Wrapper)`
padding: 20px;
`;

export interface EntitiesBoardProps {}

const EntitiesBoard: FC<EntitiesBoardProps> = () => {
  return (<InnerWrapper><Entity/></InnerWrapper>);
};

export default EntitiesBoard;
