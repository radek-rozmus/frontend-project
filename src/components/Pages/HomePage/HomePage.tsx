import {FC} from 'react';
import styled from "styled-components";
import {Page} from '../../../styledHelpers/Components';
import {LatestPublications} from './innerComponents/LatestPublications';
 

const PageInnerWrapper = styled(Page)`
`;

export const HomePage: FC= () => {
    return ( 

        <PageInnerWrapper>
            <LatestPublications/>
        </PageInnerWrapper>
     );
}