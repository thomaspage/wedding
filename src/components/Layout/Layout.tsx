import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { LayoutContainer, Title } from "./Layout.styles";
import Menu from "../Menu";
import Content from "../Content";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";

const Layout = ({}) => {

  const location = useLocation()

  const { t } = useTranslation();
  
  const title = {
    "/accomodations": t("pages.accomodations.path"),
    "/schedule": t("pages.schedule.path"),
    "/rsvp": t("pages.rsvp.path"),
  }[location.pathname]

  return (
    <LayoutContainer>
      {/* Menu */}
      <Menu />

      {/* Content */}
      <Content>
        <>
          <Title sx={{textAlign: location.pathname === "/schedule" ? "center": ""}}>{title}</Title>
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
