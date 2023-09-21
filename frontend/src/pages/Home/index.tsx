import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import HouseCard from "components/houseCard";
import request from "request/index";
import { ApiHouseHouse, IHouse } from "types/contentTypes";

export default function Home() {
  const [houses, setHouses] = useState<IHouse[]>([]);

  useEffect(() => {
    const getList = () => {
      request.find<ApiHouseHouse[]>("houses").then((res) => {
        console.log("res: ", res);
        setHouses(res.data.map(r => ({...r.attributes, id: r.id})));
      });
    };
    getList();
  }, []);
  return (
    <Container>
      <BannerText>Start Your Hacker House Journey...</BannerText>
      <List>
        {houses.map((h, i) => (
          <HouseCard key={i} data={h} />
        ))}

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
