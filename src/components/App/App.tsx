import { Component } from "react";
import { Provider } from "react-redux";
import {store} from "../../store/store";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { AppHeader } from "../AppHeader/AppHeader";
import { AppMain } from "../AppMain/AppMain";
import { Colors } from "../../styledHelpers/Colors";

import { User } from "../../types/User";

const Layout = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: ${Colors.fontblue};
`;

class App extends Component {
  state = {
    usr: {},
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/3")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          usr: { id: json.id, name: json.name, company: json.company.name },
        });
      });
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <AppHeader user={this.state.usr as User} />
            <AppMain user={this.state.usr as User} />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
