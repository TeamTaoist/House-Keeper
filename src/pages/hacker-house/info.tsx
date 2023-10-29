import styled from "@emotion/styled";
import { PageStyle } from "../../assets/styles/global";
import { useParams } from "react-router-dom";
import {
  HouseItemColumn,
  HouseItemFullWidth,
} from "../../components/houseItem";
import { Button } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import ProjectItem from "../../components/projectItem";
import HackerAvatar from "../../components/hacker/hackerAvatar";
import AlbumItem from "../../components/albumItem";
import { useEffect } from "react";

export default function HackerHouseInfoPage() {
  const { id } = useParams();
  const [projects] = useState([]);

  useEffect(() => {
    // TODO
  }, [id]);

  return (
    <PageStyle>
      <TopSection>
        {projects.length > 0 ? (
          <>
            <HouseItemColumn>
              <Button variant="contained">Apply</Button>
            </HouseItemColumn>
            <div>
              <BlockTitle className="title">Projects</BlockTitle>
              <BlockContent>
                <Grid container spacing={4}>
                  {new Array(5).fill(0).map((item, index) => (
                    <Grid item xs={6} key={index}>
                      <ProjectItem />
                    </Grid>
                  ))}
                </Grid>
              </BlockContent>
            </div>
          </>
        ) : (
          <HouseItemFullWidth>
            <ApplyBox>
              <Button variant="contained">Apply</Button>
            </ApplyBox>
          </HouseItemFullWidth>
        )}
      </TopSection>
      {projects.length === 0 && (
        <BlockSection>
          <BlockTitle className="title">Projects</BlockTitle>
          <BlockContent>
            <Grid container spacing={4}>
              {new Array(5).fill(0).map((item, index) => (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <ProjectItem />
                </Grid>
              ))}
            </Grid>
          </BlockContent>
        </BlockSection>
      )}
      <BlockSection>
        <BlockTitle className="title">Hackers</BlockTitle>
        <BlockContent>
          <Grid container spacing={2} rowSpacing={6}>
            {new Array(5).fill(0).map((item, index) => (
              <Grid item xs={4} sm={3} lg={2} key={index}>
                <HackerAvatar />
              </Grid>
            ))}
          </Grid>
        </BlockContent>
      </BlockSection>
      <BlockSection>
        <BlockTitle className="title">Gallery</BlockTitle>
        <BlockContent>
          <Grid container spacing={4}>
            {new Array(5).fill(0).map((item, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <AlbumItem />
              </Grid>
            ))}
          </Grid>
        </BlockContent>
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
  margin-top: 60px;
`;

const BlockTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const BlockContent = styled.div``;

const ApplyBox = styled.div`
  padding-block: 40px;
  text-align: center;
`;
