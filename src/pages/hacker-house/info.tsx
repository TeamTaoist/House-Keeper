import styled from "@emotion/styled";
import { PageStyle } from "../../assets/styles/global";
import { useParams } from "react-router-dom";
import {
  HouseItemColumn,
  HouseItemFullWidth,
} from "../../components/houseItem";
import { Button } from "@mui/material";
import { useState } from "react";

export default function HackerHouseInfoPage() {
  const { id } = useParams();
  const [projects] = useState([]);
  return (
    <PageStyle>
      <h1>{id}</h1>
      <TopSection>
        {projects.length > 0 ? (
          <>
            <HouseItemColumn>
              <Button variant="contained">Apply</Button>
            </HouseItemColumn>
            <div>
              <BlockTitle className="title">Projects</BlockTitle>
            </div>
          </>
        ) : (
          <HouseItemFullWidth>
            <Button variant="contained">Apply</Button>
          </HouseItemFullWidth>
        )}
      </TopSection>
      {projects.length === 0 && (
        <BlockSection>
          <BlockTitle className="title">Projects</BlockTitle>
        </BlockSection>
      )}
      <BlockSection>
        <BlockTitle className="title">Hackers</BlockTitle>
      </BlockSection>
      <BlockSection>
        <BlockTitle className="title">Gallery</BlockTitle>
      </BlockSection>
    </PageStyle>
  );
}

const TopSection = styled.section`
  display: flex;
  gap: 40px;
  > div {
    flex: 1;
  }
`;

const BlockSection = styled.section`
  margin-top: 24px;
  .title {
  }
`;

const BlockTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
