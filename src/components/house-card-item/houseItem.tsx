import React from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Title, Host, TimeBox, Intro } from "./style";

export default function HouseItem() {
  return (
    <HouseItemStyled
      onClick={() =>
        window.open(`${window.location.origin}/#/hacker-house/${1}`, "_blank")
      }
    >
      <img
        className="banner"
        src="https://www.stylearena.net/wp-content/uploads/2015/04/cute-cat-in-jeans-1024x640.jpg"
        alt=""
      />
      <Title>Build dApps on Vara Network</Title>
      <Host>
        <span> Host By</span>
        <span>
          <img
            src="https://img0.baidu.com/it/u=187070227,2985336747&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"
            alt=""
          />
        </span>
        <span>Cat Community</span>
      </Host>
      <Intro>
        <p>
          As a leader in innovation, Gear's Hacker House will put you at the
          forefront of Web3 technology, building decentralized applications on
          the Vara Network and pushing the limits of innovation!{" "}
        </p>
        <p>
          As a leader in innovation, Gear's Hacker House will put you at the
          forefront of Web3 technology, building decentralized applications on
          the Vara Network and pushing the limits of innovation!{" "}
        </p>
      </Intro>
      <TimeBox>
        <div>
          <AccessTimeIcon />
          <span>Sep 16 - Sep 22，2023</span>
        </div>
        <div>
          <LocationOnIcon />
          <span>Shanghai, China</span>
        </div>
      </TimeBox>
    </HouseItemStyled>
  );
}

export const HouseItemFullWidth = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <HouseItemFullWidthCard>
      <div className="top">
        <div>
          <Title>Build dApps on Vara Network</Title>
          <Host>
            <span> Host By</span>
            <span>
              <img
                src="	https://img0.baidu.com/it/u=187070227,2985336747&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"
                alt=""
              />
            </span>
            <span>Cat Community</span>
          </Host>
          <TimeBox>
            <div>
              <AccessTimeIcon />
              <span>Sep 16 - Sep 22，2023</span>
            </div>
            <div>
              <LocationOnIcon />
              <span>Shanghai, China</span>
            </div>
          </TimeBox>
          {children}
        </div>
        <div className="banner-box">
          <img
            className="banner"
            src="	https://www.stylearena.net/wp-content/uploads/2015/04/cute-cat-in-jeans-1024x640.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bottom">
        <Intro>
          <p>
            As a leader in innovation, Gear's Hacker House will put you at the
            forefront of Web3 technology, building decentralized applications on
            the Vara Network and pushing the limits of innovation!{" "}
          </p>
          <p>
            As a leader in innovation, Gear's Hacker House will put you at the
            forefront of Web3 technology, building decentralized applications on
            the Vara Network and pushing the limits of innovation!{" "}
          </p>
        </Intro>
      </div>
    </HouseItemFullWidthCard>
  );
};

const HouseItemStyled = styled(Card)`
  padding: 16px;
  cursor: pointer;
  img.banner {
    width: 100%;
    margin-block: 8px;
  }
`;



const HouseItemFullWidthCard = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    .banner-box {
      width: 50%;
    }
    img.banner {
      width: 100%;
      max-width: 630px;
    }
  }
  .bottom {
    margin-top: 30px;
  }
`;
