import styled from "@emotion/styled";
import { PageStyle } from "../../assets/styles/global";
import Grid from "@mui/material/Grid";
import ProjectItem from "../../components/projectItem";

export default function ExploreProjects() {
  return (
    <PageStyle>
      <h1>Projects</h1>
      <p>Projects All projects created at Hacker House.</p>
      <OptionBox>
        <SearchInput placeholder="Search" />
      </OptionBox>
      <ContentBox>
        <Grid container spacing={4}>
          {new Array(20).fill(0).map((item, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <ProjectItem />
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
