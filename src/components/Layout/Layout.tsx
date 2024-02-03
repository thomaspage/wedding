import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { LayoutContainer, Title } from "./Layout.styles";
import Menu from "../Menu";
import Content from "../Content";

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
      <Menu></Menu>

      {/* Content */}
      {/* <div> */}
      <Content>
        <>
          <Title sx={{textAlign: title === "Schedule" ? "center": ""}}>{title}</Title>
          <Outlet />
        </>
      </Content>
      {/* </div> */}
    </LayoutContainer>
  );
};

export function useSetTitle() {
  return useOutletContext();
}

export default Layout;
