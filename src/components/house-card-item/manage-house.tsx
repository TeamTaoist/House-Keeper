import styled from "@emotion/styled";

import { Host, TimeBox, Intro } from "./style";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function ManageHouseItem({
  children,
  ...rest
}: {
  children?: React.ReactNode;
  [k: string]: any;
}) {
  return (
    <HouseItemFullWidthCard
      href={`${window.location.origin}/#/manage/hacker-house/${1}`}
      target="_blank"
      {...rest}
    >
      <TopBox>
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
        </div>
      </TopBox>
      <BottomBox>
        <div>
          <Intro>
            <p>
              As a leader in innovation, Gear's Hacker House will put you at the
              forefront of Web3 technology, building decentralized applications
              on the Vara Network and pushing the limits of innovation!{" "}
            </p>
            <p>
              As a leader in innovation, Gear's Hacker House will put you at the
              forefront of Web3 technology, building decentralized applications
              on the Vara Network and pushing the limits of innovation!{" "}
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
          {children}
         
        </div>

        <div className="banner-box">
          <img
            className="banner"
            src="https://www.stylearena.net/wp-content/uploads/2015/04/cute-cat-in-jeans-1024x640.jpg"
            alt=""
          />
        </div>
      </BottomBox>
    </HouseItemFullWidthCard>
  );
}

const HouseItemFullWidthCard = styled.a`
  display: block;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  padding: 40px;
  border-radius: 16px;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomBox = styled.div`
  display: flex;
  gap: 30px;
  > div {
    flex: 1;
  }
  .banner-box {
    img {
      width: 100%;
    }
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
