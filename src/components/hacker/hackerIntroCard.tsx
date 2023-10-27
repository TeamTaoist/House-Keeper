import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import ProjectItem from "../projectItem";

export default function HackerIntroCard() {
  return (
    <CardStyle>
      <div className="intro">
        Here is Hacker's personal introduction. No more than 200 words. A smart
        contract engineer with 3 years experience contract engineer with 3 years
        experience.ngineer with 3 years experience.ngineer with 3 years
        experience.
      </div>
      <ProjectList>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </ProjectList>
      <ViewMore>
        <a
          href={`${window.location.origin}/#/hacker/1`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View more {">>"}
        </a>
      </ViewMore>
    </CardStyle>
  );
}

const CardStyle = styled(Card)`
  width: 600px;
  padding: 20px 34px;
`;

const ViewMore = styled.div`
  font-size: 18px;
  text-align: center;
`;

const ProjectList = styled.div`
  margin-block: 16px;
  display: flex;
  gap: 16px;
`;
