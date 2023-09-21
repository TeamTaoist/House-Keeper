import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import LogoIcon from "assets/images/logo.jpg";

const routes = [
  { name: "Houses", path: "/" },
  { name: "Hackers", path: "/hackers" },
  { name: "Projects", path: "/projects" },
];

export default function Header() {
  const doConnect = () => {};
  return (
    <HeaderStyle>
      <HeaderContainer>
        <HeaderLeft>
          <LogoLink to="/">
            <img src={LogoIcon} alt="" />
          </LogoLink>
          <NavStyle>
            {routes.map((route, i) => (
              <li key={i}>
                <LinkStyle to={route.path}>{route.name}</LinkStyle>
              </li>
            ))}
          </NavStyle>
        </HeaderLeft>
        <div onClick={doConnect}>connect</div>
      </HeaderContainer>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  height: 80px;
  line-height: 80px;
  padding: 10px 60px;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 60px;
`;

const LogoLink = styled(Link)`
  img {
    position: relative;
    top: 16px;
    height: 60px;
  }
`;

const NavStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const LinkStyle = styled(Link)`
  font-size: 18px;
`;
