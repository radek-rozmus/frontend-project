import {FC} from 'react';
import styled from "styled-components";
import {Page} from '../../../styledHelpers/Components';
 

const PageInnerWrapper = styled(Page)`
background-color:green;
`;

export const ProfilePage: FC= () => {
    return ( 

        <PageInnerWrapper>
            Profile
        </PageInnerWrapper>
     );
}