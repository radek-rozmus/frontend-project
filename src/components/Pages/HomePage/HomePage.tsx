import {FC} from 'react';
import styled from "styled-components";
import {Page} from '../../../styledHelpers/Components';
import {LatestPublications} from './innerComponents/LatestPublications/LatestPublications';
import {ElasticCarousel} from './innerComponents/ElasticCarousel/ElasticCarousel';
import {ResumeWork} from './innerComponents/ResumeWork/ResumeWork';

const PageInnerWrapper = styled(Page)`
`;

export const HomePage: FC= () => {
    return ( 

        <PageInnerWrapper>
            <LatestPublications/>
            <ElasticCarousel/>
            <ResumeWork/>
        </PageInnerWrapper>
     );
}