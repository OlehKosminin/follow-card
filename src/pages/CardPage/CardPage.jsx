import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Section,
  Container,
  BackBtn,
  Header,
  List,
  Item,
  Image,
  Line,
  SvgWrapper,
  InfoWrapper,
  Avatar,
  TextName,
  TextFollowing,
  ButtonFollow,
  ButtonFollowing,
  AvatarWraper,
} from "./CardPage.styled";
import {
  getAllUsers,
  updUserFollowing,
} from "../../redux/users/users-operation";
import { ReactComponent as Logo } from "../../accest/Logo.svg";
const CardsPage = () => {
  const [settings, setSettings] = useState({
    page: 1,
    limit: 3,
  });
  const cards = useSelector((store) => store.users.cards);
  const [items, setItems] = useState(cards);
  const dispatch = useDispatch();

  useEffect(() => {
    setItems(cards);
  }, [cards]);

  useEffect(() => {
    dispatch(getAllUsers(settings));
  }, [dispatch, settings]);

  const loadMore = () => {
    console.log("load more");
    setSettings((prevSettings) => ({
      ...prevSettings,
      page: prevSettings.page + 1,
    }));
    console.log("settings: ", settings.page);
  };

  const toggleFollowing = (id, isFollowing) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          following: !isFollowing,
        };
      }
      return item;
    });
    setItems(updatedItems);
    dispatch(updUserFollowing({ id, following: !isFollowing }));
  };

  const markup = items.map(
    ({ avatar, followers, following, id, tweets, user }) => {
      let correctFolowers = null;
      if (followers.length > 3) {
        correctFolowers = Number(followers).toLocaleString("en-US");
      }
      return (
        <Item key={id}>
          <Image>
            <SvgWrapper>
              <Logo />
            </SvgWrapper>
          </Image>
          <Line />
          <InfoWrapper>
            <AvatarWraper>
              <Avatar src={avatar} />
            </AvatarWraper>
            <TextName>{user}</TextName>
            <TextFollowing>
              {followers.length > 3 ? correctFolowers : followers} Followers
            </TextFollowing>
            {!following ? (
              <ButtonFollowing
                onClick={() => {
                  toggleFollowing(id, following);
                }}
              >
                Following
              </ButtonFollowing>
            ) : (
              <ButtonFollow
                onClick={() => {
                  toggleFollowing(id, following);
                }}
              >
                Follow
              </ButtonFollow>
            )}
          </InfoWrapper>
        </Item>
      );
    }
  );
  return (
    <Section>
      <Header>
        <NavLink to="/">
          <BackBtn>Back</BackBtn>
        </NavLink>
      </Header>
      <Container>
        <List>{markup}</List>
        <ButtonFollowing onClick={loadMore}>Load more</ButtonFollowing>
      </Container>
    </Section>
  );
};

export default CardsPage;
