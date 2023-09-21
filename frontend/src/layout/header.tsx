import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <HeaderLeft>
          <LogoLink to="/">
            {/* <img src={LogoIcon} alt="" /> */}
            <span>Gear House</span>
          </LogoLink>
          <NavStyle>
            <li>
              <Link to="/houses">Houses</Link>
            </li>
            <li>
              <Link to="/hackers">Hackers</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </NavStyle>
        </HeaderLeft>
        <div>connect</div>
      </HeaderContainer>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  height: 80px;
  line-height: 80px;
  padding: 10px 30px;
  box-sizing: border-box;
  background-color: #fff;
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
    top: 14px;
    height: 36px;
  }
  @media (max-width: 414px) {
    img {
      top: 4px;
      left: -0;
      height: 18px;
    }
  }
`;

const NavStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;
