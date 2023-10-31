import { PageStyle } from "../assets/styles/global";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";

const DOCS = [
  {
    poster: "",
    title: "",
    desc: "",
  },
  {
    poster: "",
    title: "",
    desc: "",
  },
  {
    poster: "",
    title: "",
    desc: "",
  },
  {
    poster: "",
    title: "",
    desc: "",
  },
  {
    poster: "",
    title: "",
    desc: "",
  },
];

const DocCard = () => {
  return (
    <DocCardStyle>
      <div className="img"></div>
      <DocCardTitle>What is a hacker house</DocCardTitle>
      <DocCardDescription>
        A description of what hacker house is
      </DocCardDescription>
    </DocCardStyle>
  );
};

const TemplateCard = () => {
  return (
    <TemplateCardStyle>
      <p>Disclaimer agreement</p>
      <Button variant="contained" size="small">View</Button>
    </TemplateCardStyle>
  );
}

export default function GuidancePage() {
  return (
    <PageStyle>
      <SectionBlock>
        <SectionTitle>Guidance</SectionTitle>
        <SectionDesc>All about how to host a hacker house.</SectionDesc>
        <SectionContent>
          <Grid container spacing={4}>
            {DOCS.map((item, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <DocCard />
              </Grid>
            ))}
          </Grid>
        </SectionContent>
      </SectionBlock>
      <SectionBlock>
        <SectionTitle>Template</SectionTitle>
        <SectionDesc>
          Download the templates you need to host hacker house
        </SectionDesc>
        <SectionContent>
          <Grid container spacing={4}>
            {DOCS.map((item, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <TemplateCard />
              </Grid>
            ))}
          </Grid>
        </SectionContent>
      </SectionBlock>
    </PageStyle>
  );
}

const SectionBlock = styled.section`
  &:last-child {
    margin-top: 40px;
  }
`;

const SectionTitle = styled.h2``;
const SectionDesc = styled.p``;

const SectionContent = styled.div``;

const DocCardStyle = styled.div`
  .img {
    width: 100%;
    height: 150px;
    background-color: #ccc;
    margin-bottom: 16px;
    border-radius: 8px;
  }
`;

const DocCardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const DocCardDescription = styled.div`
  font-size: 14px;
`;

const TemplateCardStyle = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;