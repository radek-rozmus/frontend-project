import {FC} from 'react';
import styled from "styled-components";

import { Wrapper } from '../../styledHelpers/Components';
import { barHeight } from '../AppHeader/AppHeader';

const MainPageWrapper = styled(Wrapper)`
position: absolute;
left: 0;
top: ${barHeight};
height: ${barHeight}; //set height to 50px
width: 100%;
`;

export const AppMain: FC = () => {
    return ( 
        <MainPageWrapper>
            Main Page
        </MainPageWrapper>
     );
}