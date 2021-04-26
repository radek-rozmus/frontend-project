import {FC} from 'react';
import styled from "styled-components";
import {Page} from '../../styledHelpers/Components';
 

const PageInnerWrapper = styled(Page)`
background-color:purple;
`;

export const EntitiesPage: FC= () => {
    return ( 

        <PageInnerWrapper>
            Entities
        </PageInnerWrapper>
     );
}