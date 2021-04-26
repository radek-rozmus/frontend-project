import {FC} from 'react';
import styled from "styled-components";
import {Page} from '../../styledHelpers/Components';

import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
 

const PageInnerWrapper = styled(Page)`
align-content: center;
text-align: center;
color: ${Colors.fontblue};
`;
const TestPageTitle = styled.div`
font-size: ${fontSize[24]};
position: relative;
top: 100px;
`;
const TestPageText = styled.div`
font-size: ${fontSize[18]};
position: relative;
top: 120px;
`;

export const TestPage: FC= () => {
    return ( 
        <PageInnerWrapper>
            <TestPageTitle>This is test page.</TestPageTitle>
            <TestPageText>Tu narazie jest ściernisko ale będzie San Francisco.</TestPageText>
        </PageInnerWrapper>
     );
}