import {FC} from 'react';
import styled from "styled-components";
import { Colors } from '../../../styledHelpers/Colors';
import {boxShadow, Page} from '../../../styledHelpers/Components';
import EntitiesBoard from './innerComponents/EntitiesBoard';
import EntitiesMenu from './innerComponents/EntitiesMenu';
 

const PageInnerWrapper = styled(Page)<{fullscreen?: boolean}>`
background-color: white;
z-index: ${props => props.fullscreen?2:0};
position: ${props => props.fullscreen?'fixed':'absolute'};
top: ${props => props.fullscreen?'0':null};
left: ${props => props.fullscreen?'0':null};
width: ${props => props.fullscreen?'100vw':null};
height: ${props => props.fullscreen?'100vh':null};
background-color: ${Colors.white};
  ${boxShadow(0, 0, 10, -3)};
`;


export interface EntitiesPageProps {
  fullscreen?: boolean;
}

export const EntitiesPage: FC<EntitiesPageProps> = ({fullscreen}) => {
    return ( 

        <PageInnerWrapper fullscreen = {fullscreen}>
            <EntitiesMenu/>
            <EntitiesBoard/>
        </PageInnerWrapper>
     );
}
