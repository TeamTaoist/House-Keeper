import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";

export default function Header() {
  return (
    <HeaderStyle>
      <nav>
        <div className="left">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <Link to="/explore/hacker-houses">Houses</Link>
          <Link to="/explore/projects">Projects</Link>
          <Link to="/explore/hackers">Hackers</Link>
          <Link to="/how-to-docs">Guidance</Link>
        </div>
        <div>
          <Link to="/create_house">
            <Button>Create</Button>
          </Link>
        </div>
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    a {
      height: 60px;
    }
    .left {
      display: flex;
      gap: 40px;
    }
    img {
      height: 50px;
      position: relative;
      top: 5px;
    }
  }
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  line-height: 60px;
`;
