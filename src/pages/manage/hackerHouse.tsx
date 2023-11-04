import styled from "@emotion/styled";
import { PageStyle } from "../../assets/styles/global";
import ManageHouseInnerItem from "../../components/house-card-item/manageHouseInner";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProjectItem from "../../components/projectItem";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";

export default function ManageHackerHouse() {
  const { id } = useParams();
  const naviagate = useNavigate();
  return (
    <PageStyle>
      <Content>
        <div>
          <ManageHouseInnerItem style={{ height: "100%" }}>
            <Button variant="contained">Edit</Button>
          </ManageHouseInnerItem>
        </div>
        <div>
          <SectionBlock>
            <BlockTitle>Hacker manage</BlockTitle>
            <ApplicationBox
              onClick={() =>
                naviagate(`/manage/hacker-house/${id}/registraction-result`)
              }
            >
              <span>Application result</span>
              <ChevronRightIcon />
            </ApplicationBox>
          </SectionBlock>
          <SectionBlock>
            <BlockTitle>Project manage</BlockTitle>
            <ProjectList>
              {new Array(5).fill(0).map((item, index) => (
                <ProjectItem key={index} />
              ))}
            </ProjectList>
          </SectionBlock>
        </div>
      </Content>
    </PageStyle>
  );
}

const Content = styled.div`
  display: flex;
  gap: 40px;
  min-height: 100%;
  > div {
    flex: 1;
    align-items: stretch;
  }
`;

const SectionBlock = styled.div`
  margin-bottom: 30px;
`;

const BlockTitle = styled.div`
  margin-bottom: 20px;
  font-weight: bold;
`;

const ApplicationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
`;

const ProjectList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  > div {
    width: 49%;
  }
`;
