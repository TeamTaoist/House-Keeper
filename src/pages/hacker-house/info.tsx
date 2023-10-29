import styled from "@emotion/styled";
import { PageStyle } from "../../assets/styles/global";
import { useParams } from "react-router-dom";
import { HouseItemColumn } from "../../components/houseItem";
import { Button } from "@mui/material";

export default function HackerHouseInfoPage() {
  const { id } = useParams();
  return (
    <PageStyle>
      <h1>{id}</h1>
      <TopSection>
        <HouseItemColumn>
          <Button variant="contained">Apply</Button>
        </HouseItemColumn>
        <div>111</div>
      </TopSection>
    </PageStyle>
  );
}

const TopSection = styled.section`
  display: flex;
  > div {
    flex: 1;
  }
`;
