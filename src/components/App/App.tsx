import React, { FC } from 'react';
import styled from 'styled-components';

import {TopBar} from '../TopBar/TopBar';


const Layout = styled.div`

`;

const Content = styled.div`

`;
 
const App: FC = () => {
  return ( 
    <Layout>
      <TopBar/>
      <Content>
        <div>Content</div>
      </Content>
    </Layout>
   );
}

export default App;
