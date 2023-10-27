import styled from "@emotion/styled";
import { PageStyle } from "../../assets/styles/global";
import Grid from "@mui/material/Grid";
import HackerAvatar from "../../components/hacker/hackerAvatar";

export default function ExploreHackers() {
  return (
    <PageStyle>
      <h1>Hackers</h1>
      <p>All hackers in House Keeper.</p>
      <OptionBox>
        <SearchInput placeholder="Search" />
      </OptionBox>
      <ContentBox>
        <Grid container spacing={2}>
          {new Array(20).fill(0).map((item, index) => (
            <Grid item xs={4} sm={3} lg={2} key={index}>
              <HackerAvatar />
            </Grid>
          ))}
        </Grid>
      </ContentBox>
    </PageStyle>
  );
}

const OptionBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

const SearchInput = styled.input`
  min-width: 260px;
  max-width: 100%;
  padding-inline: 10px;
  height: 37px;
  border-radius: 4px;
`;

const ContentBox = styled.div``;
