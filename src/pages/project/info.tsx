import styled from "@emotion/styled";
import { PageStyle } from "../../assets/styles/global";
import { useParams } from "react-router-dom";
import Keeper from "../../components/keeper";
import HackerAvatar from "../../components/hacker/hackerAvatar";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";

export default function ProjectInfoPage() {
  const { id } = useParams();

  useEffect(() => {
    // TODO
  }, [id]);

  return (
    <PageStyle>
      <Banner>
        <img
          className="banner-img"
          src="https://www.stylearena.net/wp-content/uploads/2015/04/cute-cat-in-jeans-1024x640.jpg"
          alt=""
        />
        <img
          className="logo"
          src="https://img0.baidu.com/it/u=187070227,2985336747&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"
          alt=""
        />
      </Banner>
      <Title>Project name. No more than 20 words</Title>
      <Keeper />
      <Blocks>
        <Block>
          <BlockTitle>Source code</BlockTitle>
          <div>
            <a
              href="https://mycolor.space/?hex=%235EB8C2&sub=1"
              target="_blank"
            >
              https://mycolor.space/?hex=%235EB8C2&sub=1
            </a>
          </div>
        </Block>
        <Block>
          <BlockTitle>Website</BlockTitle>
          <div>
            <a
              href="https://mycolor.space/?hex=%235EB8C2&sub=1"
              target="_blank"
            >
              https://mycolor.space/?hex=%235EB8C2&sub=1
            </a>
          </div>
        </Block>
        <Block>
          <BlockTitle>Members</BlockTitle>
          <Grid container spacing={2} rowSpacing={6}>
            {new Array(5).fill(0).map((item, index) => (
              <Grid item xs={4} sm={3} lg={2} key={index}>
                <HackerAvatar />
              </Grid>
            ))}
          </Grid>
        </Block>

        <Block>
          <BlockTitle>Intro</BlockTitle>
          <Intro>
            <p>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </Intro>
        </Block>
      </Blocks>
    </PageStyle>
  );
}

const Banner = styled.div`
  position: relative;
  img.banner-img {
    width: 100%;
  }
  img.logo {
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    right: 10%;
    bottom: -14px;
  }
`;
const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Block = styled.div``;

const BlockTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Intro = styled.div``;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 22px;
`;
