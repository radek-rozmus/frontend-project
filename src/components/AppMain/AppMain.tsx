import {FC} from 'react';
import styled from "styled-components";

import { Wrapper } from '../../styledHelpers/Components';
import { AppHeaderDimensions } from '../../styledHelpers/commonVariables';

import { LeftBar } from '../LeftBar/LeftBar';
import { MainContent } from './MainContent'
import { User } from '../../redux/types/User';



const MainPageWrapper = styled(Wrapper)`
z-index: -1;
position: absolute;
justify-content: left;
left: 0;
top: ${AppHeaderDimensions.barHeight};
height: calc(100% - ${AppHeaderDimensions.barHeight}); //set height to 50px
width: 100%;
`;

export interface AppMainProps {
    user: User;
  };  

export const AppMain: FC<AppMainProps>  = (props) => {
    return ( 
        <MainPageWrapper>
            <LeftBar user = {props.user}/>
            <MainContent/>
        </MainPageWrapper>
     );
}