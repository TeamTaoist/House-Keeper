import styled from "@emotion/styled";
import { PageStyle } from "../assets/styles/global";
import Grid from "@mui/material/Grid";
import HouseItem from "../components/house-card-item/houseItem";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function HomePage() {
  return (
    <PageStyle>
      <SectionBox>
        <Grid container spacing={2}>
          {new Array(3).fill(0).map((item, index) => (
            <Grid item xs={4} key={index}>
              <HouseItem />
            </Grid>
          ))}
        </Grid>
        <ExploreTip>
          <Link to="/explore/hacker-houses">
            Explore more Hacker House {">>"}
          </Link>
        </ExploreTip>
      </SectionBox>
      <SectionBox>
        <BottomBanner>
          <div className="title">Start Your Hacker House journey！</div>
          <div className="btns">
            <Link to="/explore/hacker-houses">
              <Button variant="contained" size="large">
                Explore Hacker House
              </Button>
            </Link>
            <Link to="/create-hacker-house">
              <Button variant="contained" size="large">
                Create a Hacker House
              </Button>
            </Link>
          </div>
        </BottomBanner>
      </SectionBox>
    </PageStyle>
  );
}

const SectionBox = styled.section`
  margin-bottom: 30px;
`;

const ExploreTip = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 28px;
`;

const BottomBanner = styled.div`
  width: 100%;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  border-radius: 20px;
  padding-block: 30px;
  text-align: center;
  .title {
    font-size: 36px;
    font-weight: 900;
    margin-bottom: 20px;
  }
  .btns {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
`;
