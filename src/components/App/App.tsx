import { Component } from 'react';
import styled from 'styled-components';

import {AppHeader} from '../AppHeader/AppHeader';
import {AppMain} from '../AppMain/AppMain';
import {Colors} from '../../styledHelpers/Colors';


const Layout = styled.div`
font-family: 'Open Sans', sans-serif;
font-weight: 600;
color:  ${Colors.fontblue};
`;

export type User = {
  id: number | undefined,
  name: string | undefined
  company: string | undefined
}

class App extends Component {

  state = {
    usr: {}
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/3')
    .then((response) => response.json())
    .then(json => {
      this.setState({
        usr: {id: json.id, name: json.name, company: json.company.name}
      });
    });
    
  }

  render() { 
    return ( 
      <Layout>
      <AppHeader/>
      <AppMain user = {this.state.usr as User}/>
    </Layout>
     );
  }
}
 
export default App;