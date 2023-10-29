import React from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function HouseItem() {
  return (
    <HouseItemStyled
      onClick={() =>
        window.open(`${window.location.origin}/#/hacker-house/${1}`, "_blank")
      }
    >
      <img
        className="banner"
        src="	https://www.stylearena.net/wp-content/uploads/2015/04/cute-cat-in-jeans-1024x640.jpg"
        alt=""
      />
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

export const HouseItemColumn = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <HouseColumnCard
      onClick={() =>
        window.open(`${window.location.origin}/#/hacker-house/${1}`, "_blank")
      }
    >
      <Title>Build dApps on Vara Network</Title>
      <img
        className="banner"
        src="	https://www.stylearena.net/wp-content/uploads/2015/04/cute-cat-in-jeans-1024x640.jpg"
        alt=""
      />
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
      {children}
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
    </HouseColumnCard>
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

const HouseColumnCard = styled.div`
  background-color: #f2f4d3;
  padding: 16px;
  cursor: pointer;
  img.banner {
    width: 100%;
    margin-block: 8px;
  }
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-block: 6px;
`;

const Host = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
  font-weight: bold;
  font-size: 13px;
  margin-top: 8px;
  img {
    width: 28px;
    border-radius: 50%;
  }
`;

const Intro = styled.div`
  line-height: 18px;
  color: #666;
  font-size: 12px;
  p {
    margin-block: 8px;
  }
`;

const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: #26daca;
  font-size: 12px;
  > div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
