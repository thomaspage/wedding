import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { LayoutContainer, Title } from "./Layout.styles";
import Menu from "../Menu";
import Content from "../Content";
import LanguageSelector from "../LanguageSelector";

const Layout = ({}) => {

  const location = useLocation()
  
  const title = {
    "/accomodations": "Accomodations",
    "/schedule": "Schedule",
    "/rsvp": "RSVP",
  }[location.pathname]
  return (
    <LayoutContainer>
      {/* Menu */}
      <Menu />

      {/* Content */}
      <Content>
        <>
          <Title sx={{textAlign: title === "Schedule" ? "center": ""}}>{title}</Title>
          <Outlet />
        </>
      </Content>

      {/* Lanugage Selector */}
      <LanguageSelector />

    </LayoutContainer>
  );
};

export function useSetTitle() {
  return useOutletContext();
}

export default Layout;
