import {FC} from 'react';
import styled from "styled-components";
import { Colors } from '../../../styledHelpers/Colors';
import {boxShadow, Page} from '../../../styledHelpers/Components';
import EntitiesBoard from './innerComponents/EntitiesBoard';
import EntitiesMenu from './innerComponents/EntitiesMenu';
 

const PageInnerWrapper = styled(Page)`
background-color: ${Colors.white};
  ${boxShadow(0, 0, 10, -3)};
`;

export const EntitiesPage: FC= () => {
    return ( 

        <PageInnerWrapper>
            <EntitiesMenu/>
            <EntitiesBoard/>
        </PageInnerWrapper>
     );
}