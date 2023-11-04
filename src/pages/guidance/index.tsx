import { PageStyle } from "../../assets/styles/global";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import HowToIcon from "../../assets/images/doc/howto.jpg";
import { Link } from "react-router-dom";

type DocCardProps = {
  poster: string;
  title: string;
  desc?: string;
  id: string;
};

const DOCS: DocCardProps[] = [
  {
    poster: HowToIcon,
    title: "House Keeper guidance",
    desc: "111",
    id: "50019d8cada9474d84b6c45cfde04ec4",
  },
];

const DocCard = ({ data }: { data: DocCardProps }) => {
  return (
    <DocCardStyle to={`/how-to-docs/${data.id}`}>
      <img src={data.poster} alt="" />
      <DocCardTitle>{data.title}</DocCardTitle>
      <DocCardDescription>{data.desc}</DocCardDescription>
    </DocCardStyle>
  );
};

const TemplateCard = () => {
  return (
    <TemplateCardStyle>
      <p>Disclaimer agreement</p>
      <Button variant="contained" size="small">
        View
      </Button>
    </TemplateCardStyle>
  );
};

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
                <DocCard data={item} />
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

const DocCardStyle = styled(Link)`
  display: inline-block;
  background-color: #fff;
  border-radius: 16px;
  padding-bottom: 20px;
  img {
    width: 100%;
    background-color: #ccc;
    border-radius: 8px;
  }
`;

const DocCardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-inline: 20px;
  margin-bottom: 10px;
`;
const DocCardDescription = styled.div`
  font-size: 14px;
  padding-inline: 20px;
`;

const TemplateCardStyle = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;
