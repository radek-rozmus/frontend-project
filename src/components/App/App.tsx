import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { AppHeader } from "../AppHeader/AppHeader";
import { AppMain } from "../AppMain/AppMain";
import { Colors } from "../../styledHelpers/Colors";

import { User } from "../../models/types/User";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { setUser, setUsers } from "../../redux/actions/userAccountActions";
import LoadingScreen from "./innerComponents/LoadingScreen";
import { Post } from "../../models/types/Post";
import { setPosts } from "../../redux/actions/postsActions";
import { setEntities } from "../../redux/actions/entitiesPageActions";
import { Photo } from "../../models/types/Photo";
import { setPhotos } from "../../redux/actions/photosActions";
import { userConfig } from "../../config";

const Layout = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: ${Colors.fontblue};
`;

const App: FC = () => {
  const [loaded, setLoaded] = useState(false);
  const user: User = useAppSelector((state) => state.userAccount.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        json.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
            company: item.company.name,
            city: item.address.city,
            email: item.email,
            phone: item.phone,
          } as User;
        })
      )
      .then((res: User[]) => {
        dispatch(setUser(res[userConfig.user]));
        dispatch(setUsers(res));
      });
    const posts = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        json.map((item: any) => {
          return {
            id: item.id,
            title: item.title,
            text: item.body,
            user: item.userId,
          };
        })
      )
      .then((res: Post[]) => {
        dispatch(setPosts(res));
        const entities = res.map((item: Post) => {
          const result = item.title.split(" ");
          result.length = 3;
          return result.join(" ");
        });
        entities.splice(32, entities.length - 32);
        dispatch(setEntities(entities));
      });

    const photos = fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) =>
        json.map((item: any) => {
          return {
            albumId: item.albumId,
            id: item.id,
            title: item.title,
            url: item.url,
            thumbnailUrl: item.thumbnailUrl,
          };
        })
      )
      .then((res: Photo[]) => {
        dispatch(setPhotos(res));
      });
    Promise.all([posts, user, photos]).then(() => setLoaded(true));
  }, [dispatch]);

  return (
    <>
      {loaded ? (
        <BrowserRouter>
          <Layout>
            <AppHeader user={user} />
            <AppMain user={user} />
          </Layout>
        </BrowserRouter>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default App;
