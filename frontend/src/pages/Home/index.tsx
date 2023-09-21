import styled from "@emotion/styled";
import { useState } from "react";
import Button from "@mui/material/Button";
import HouseCard from "components/houseCard";

export default function Home() {
  const [houses, setHouses] = useState<IHouse[]>([]);
  return (
    <Container>
      <BannerText>Stort Your Hacker House Journey...</BannerText>
      <List>
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </List>
      <OperateBox>
        <Button variant="contained">Explore More</Button>
      </OperateBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const BannerText = styled.div`
  font-size: 50px;
  color: #000;
  font-family: Roboto;
  margin-top: 80px;
  margin-bottom: 40px;
`;

const OperateBox = styled.div`
  margin-top: 40px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 40px;
`;
