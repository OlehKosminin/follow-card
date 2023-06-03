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
  Button,
  AvatarWraper,
} from "./CardPage.styled";
import {
  getAllUsers,
  updUserFollowing,
  getUserByCategory,
} from "../../redux/users/users-operation";
import { ReactComponent as Logo } from "../../accest/Logo.svg";
import DropMenu from "../../modules/DropMenu/DropMenu";
import { getCards, isFullLoad } from "../../redux/users/users-selectors";

const CardsPage = () => {
  const [settings, setSettings] = useState({
    page: 1,
    limit: 3,
  });
  const cards = useSelector(getCards);
  const fullLoad = useSelector(isFullLoad);
  const [items, setItems] = useState(cards);
  const [category, setCategory] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      dispatch(getUserByCategory(category));
    }
  }, [category, dispatch]);

  useEffect(() => {
    setItems(cards);
  }, [cards]);

  useEffect(() => {
    dispatch(getAllUsers(settings));
  }, [dispatch, settings]);

  const loadMore = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      page: prevSettings.page + 1,
    }));
  };

  const toggleFollowing = (id, isFollowing, followers) => {
    const convertedFollowers = Array.isArray(followers)
      ? followers[0]
      : followers;
    const convertedNumber = convertedFollowers.toString().replace(/,/g, "");
    const numb = isFollowing
      ? Number(convertedNumber) + 1
      : Number(convertedNumber) - 1;
    const numberToString = numb.toLocaleString("en-US");
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          following: !isFollowing,
          followers: numberToString,
        };
      }
      return item;
    });
    setItems(updatedItems);
    dispatch(
      updUserFollowing({ id, following: !isFollowing, followers: numb })
    );
  };

  const markup = items.map(
    ({ avatar, followers, following, id, tweets, user }) => {
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
              {String(followers).includes(",")
                ? followers
                : Number(followers).toLocaleString("en-US")}{" "}
              Followers
            </TextFollowing>

            <Button
              style={{
                backgroundColor: !following
                  ? "var(--following-bg-btn)"
                  : "var(--follow-bg-btn)",
                transform: following && "scale(1)",
              }}
              onClick={() => {
                toggleFollowing(id, following, followers);
              }}
            >
              Follow
            </Button>
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
        <DropMenu setCategory={setCategory} />
      </Header>
      <Container>
        <List>{markup}</List>
        <Button
          onClick={loadMore}
          disabled={fullLoad ? true : false}
          style={{ backgroundColor: fullLoad && "silver" }}
        >
          {fullLoad ? "Loading all users" : "Load more"}
        </Button>
      </Container>
    </Section>
  );
};

export default CardsPage;
