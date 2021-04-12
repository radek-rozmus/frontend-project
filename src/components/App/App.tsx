import React, { FC } from 'react';
import styled from 'styled-components';

import {AppHeader} from '../AppHeader/AppHeader';
import {AppMain} from '../AppMain/AppMain';


const Layout = styled.div`

`;
 
const App: FC = () => {
  return ( 
    <Layout>
      <AppHeader/>
      <AppMain/>
    </Layout>
   );
}

export default App;
