import { FC, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { AppHeader } from "../AppHeader/AppHeader";
import { AppMain } from "../AppMain/AppMain";
import { Colors } from "../../styledHelpers/Colors";

import { User } from "../../redux/types/User";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { setUser } from "../../redux/actions/userAccountActions";

const Layout = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: ${Colors.fontblue};
`;

 
const App: FC = () => {

  const user: User = useAppSelector((state) => state.userAccount.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        dispatch(setUser({ id: json.id, name: json.name, company: json.company.name, city: json.address.city, email: json.email, phone: json.phone }));
      })
    },[dispatch]);
    

  return (
      <BrowserRouter>
        <Layout>
          <AppHeader user={user as User} />
          <AppMain user={user as User} />
        </Layout>
      </BrowserRouter>
  );
}
 
export default App;

  

