import {FC} from 'react';
import styled from "styled-components";
import {Page} from '../../styledHelpers/Components';
 

const PageInnerWrapper = styled(Page)`
background-color:red;
`;

export const HomePage: FC= () => {
    return ( 

        <PageInnerWrapper>
            Home
        </PageInnerWrapper>
     );
}