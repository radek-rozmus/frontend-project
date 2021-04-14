import {FC} from 'react';
import styled from "styled-components";

import { Wrapper } from '../../styledHelpers/Components';
import { barHeight } from '../AppHeader/AppHeader';
import { LeftBar } from '../LeftBar/LeftBar';
import { User } from '../App/App';


const MainPageWrapper = styled(Wrapper)`
z-index: -1;
background-color: #f5f7f9;
position: absolute;
justify-content: left;
left: 0;
top: ${barHeight};
height: calc(100% - 50px); //set height to 50px
width: 100%;
`;

export interface AppMainProps {
    user: User;
  };  

export const AppMain: FC<AppMainProps>  = (props) => {
    return ( 
        <MainPageWrapper>
            <LeftBar user = {props.user}/>
        </MainPageWrapper>
     );
}