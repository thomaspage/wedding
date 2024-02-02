import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Hamburger, List, ListItem, ListType, MenuContainer } from "./Menu.styles";
import { Typography } from "@mui/material";

const Menu = ({}) => {
  
  const [open, setOpen] = useState(false);
  
  const location = useLocation();

  const routes = [
    {pathname: "/", label: "Home"},
    {pathname: "/accomodations", label: "Accomodations"},
    {pathname: "/rsvp", label: "RSVP",}
  ]

  const handleClick = () => {
    setOpen(false);
    window.scrollTo(0,0);
  }

  return (
    <MenuContainer>

      <Hamburger onClick={() => setOpen(!open)}>Menu</Hamburger>
      
      <List open={open}>
        {routes.map((route, i) => {
          return (
            <ListItem key={i} to={route.pathname} onClick={handleClick}>
              <ListType open={route.pathname === location.pathname}>{route.label}</ListType>
            </ListItem>
          )
          })}
      </List>
    </MenuContainer>
  );
};

export default Menu;
