import styled from "@emotion/styled";
import { Card } from "@mui/material";

export default function HouseItem() {
  return (
    <HouseItemStyled>
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
    </HouseItemStyled>
  );
}

const HouseItemStyled = styled(Card)`
  padding: 16px;
  img.banner {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
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
