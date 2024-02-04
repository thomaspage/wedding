import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Hamburger,
  Hearts,
  List,
  ListItem,
  ListType,
  MenuContainer,
} from "./Menu.styles";
import { Typography } from "@mui/material";

const Menu = ({}) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const routes = [
    {
      pathname: "/",
      label: "Home",
      hearts: {
        version: 2,
        $height: 25,
        $top: -9,
        $right: 0,
      },
    },
    {
      pathname: "/schedule",
      label: "Schedule",
      hearts: {
        version: 1,
        $height: 22,
        $top: -2,
        $left: -13,
      },
    },    
    {
      pathname: "/accomodations",
      label: "Accomodations",
      hearts: {
        version: 4,
        $height: 14,
        $top: -5,
        $right: 0,
      },
    },
    {
      pathname: "/rsvp",
      label: "RSVP",
      hearts: {
        version: 3,
        $height: 14,
        $bottom: 10,
        $right: 3,
      },
    },
  ];

  const handleClick = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <MenuContainer>
      <Hamburger color="inherit" onClick={() => setOpen(!open)}>{open ? "X" : "Menu"}</Hamburger>

      <List open={open}>
        {routes.map((route, i) => {
          const selected = route.pathname === location.pathname;
          const src = `${process.env.PUBLIC_URL}/img/hearts${route.hearts.version}.png`
          return (
            <ListItem key={i} to={route.pathname} onClick={handleClick}>
              <ListType selected={selected}>{route.label}</ListType>
              {selected && route.hearts && <Hearts src={src} {...route.hearts} />}
            </ListItem>
          );
        })}
      </List>
    </MenuContainer>
  );
};

export default Menu;
