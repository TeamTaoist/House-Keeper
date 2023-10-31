import styled from "@emotion/styled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useMemo } from "react";
import SouthIcon from "@mui/icons-material/South";
import Button from "@mui/material/Button";

enum StepStatus {
  Done = 1,
  Undone = 2,
}

interface IStepProps {
  title: string;
  content: string;
  status?: StepStatus;
  extra?: React.ReactNode;
  isLast?: boolean;
}

const Step = ({ title, content, status, extra, isLast }: IStepProps) => {
  return (
    <StepBox>
      <StepBoxContent>
        <div>
          <CheckCircleIcon
            style={{ color: status === StepStatus.Done ? "green" : "unset" }}
          />
        </div>
        <div className="step">
          <div className="title">{title}</div>
          <div>{content}</div>
          {extra}
        </div>
      </StepBoxContent>
      {!isLast && <SouthIcon className="next" />}
    </StepBox>
  );
};

export default function ApplyProgress() {
  const steps = useMemo(() => {
    return [
      {
        title: "Apply",
        content: "You have completed your application!",
        status: StepStatus.Done,
      },
      {
        title: "Interview",
        content: "September 29  10:30 – 11:00am",
        extra: (
          <a href="https://meet.google.com/rrt-tcoy-wbj">
            https://meet.google.com/rrt-tcoy-wbj
          </a>
        ),
        status: StepStatus.Done,
      },
      {
        title: "Be selected",
        content:
          "You have passed the interview！ The host will contact you to sign the agreement.",
      },
      {
        title: "Agreement signing",
        content:
          "You have signed all the agreements, the host will contact you to arrange the accommodation and other matters.",
      },
    ];
  }, []);
  return (
    <ApplyBox>
      {steps.map((item, index) => (
        <Step key={index} {...item} isLast={index === 3} />
      ))}
      <ProjectBox>
        <p>Complete the last step and you will end your hacker house tour!</p>
        <Button variant="outlined">Submit Project</Button>
        <ProjectBoxList>
          <ProjectLogo />
          <ProjectLogo />
          <ProjectLogo />
        </ProjectBoxList>
      </ProjectBox>
    </ApplyBox>
  );
}

const ApplyBox = styled.div``;

const StepBox = styled.div`
  .next {
    margin-bottom: 16px;
    color: #aaa;
  }
`;

const StepBoxContent = styled.div`
  font-size: 14px;
  display: flex;
  gap: 20px;
  margin-bottom: 16px;

  .title {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

const ProjectBox = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
`;

const ProjectBoxList = styled.ul`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`

const ProjectLogo = styled.div`
    width: 50px;
    height: 50px;
    background-color: #aaa;
    border-radius: 50%;
    cursor: pointer;
`