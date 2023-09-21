import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from "assets/images/logo.jpg";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import Button from "@mui/material/Button";

const routes = [
  { name: "Houses", path: "/" },
  { name: "Hackers", path: "/hackers" },
  { name: "Projects", path: "/projects" },
];

export default function Header() {
  const [selectedAccount, setSelectedAccount] =
    useState<InjectedAccountWithMeta>();
  
  const formatAddress = (address: string) => { 
    return address.slice(0, 6) + "..." + address.slice(-4)
  }

  const connectWallet = async () => {
    const { web3Enable, web3Accounts } = await import(
      "@polkadot/extension-dapp"
    );
    const extensions = web3Enable("Polki");

    if (!extensions) {
      throw Error("No Extension Found");
    }

    const allAccounts = await web3Accounts();

    console.log(allAccounts);

    if (allAccounts.length) {
      setSelectedAccount(allAccounts[0]);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

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
        {selectedAccount ? (
          <UserBox>
            <Link to="/">{formatAddress(selectedAccount.address)}</Link>
          </UserBox>
        ) : (
          <Button variant="contained" onClick={connectWallet}>
            connect
          </Button>
        )}
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

const UserBox = styled.div`
  a {
    background-color: #000;
    color: #fff;
    border-radius: 20px;
    padding: 6px 12px;
  }
`;