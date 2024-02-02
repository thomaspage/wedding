import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./Layout.styles";
import Menu from "../Menu";
import Content from "../Content";

const Layout = ({}) => {
  return (
    <LayoutContainer>

      {/* Menu */}
      <Menu></Menu>

      {/* Content */}
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  );
};

export default Layout;
