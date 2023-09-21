import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HackerAvatar from "components/hackerAvatar";
import { useEffect, useState } from "react";
import request from "request/index";
import {
  ApiProjectProject,
  IProject,
  ApiProjectHackerProjectHacker,
  IProjectHacker,
  IUser
} from "types/contentTypes";

interface IProjectCardProps { 
  data: IProject
}

const ProjectCard = ({ data }: IProjectCardProps) => {
  const [hackers, setHackers] = useState<IUser[]>([]);
  useEffect(() => {
    const getHackers = () => {
      request
        .find<ApiProjectHackerProjectHacker[]>("project-hackers", {
          filters: {
            project: {
              id: {
                $eq: data.id,
              },
            },
          },
        })
        .then((res) => {
          let users: IUser[] = [];
          res.data.forEach((item) => {
            users = users.concat(item.attributes.users || []);
          });
          setHackers(users);
        });
    };
    data.id && getHackers();
  }, [data.id]);
  console.log("users", hackers)
  return (
    <CardStyle>
      <img style={{ width: "100%" }} src={data.cover} alt="" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center" }}
        >
          {data.name}
        </Typography>
        <p>项目简介</p>
        <Typography variant="body2" color="text.secondary">
          {data.introduction}
        </Typography>
        <p>Github地址</p>
        <Typography variant="body2" color="text.secondary">
          <a href={data.github} target="_blank" rel="noreferrer">
            {data.github}
          </a>
        </Typography>
        <p>项目成员</p>
        <MemberList>
          {hackers.map((item, i) => (
            <HackerAvatar name={item.username} size="40px" key={i} />
          ))}
        </MemberList>
      </CardContent>
    </CardStyle>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const getProjects = () => {
      request.find<ApiProjectProject[]>("projects").then((res) => {
        console.log(res);
        setProjects(res.data.map((item) => ({ ...item.attributes, id: item.id })));
        
      });
    }
    getProjects();
  }, []);
  return (
    <Contanier>
      <List>
        {projects.map((item, i) => (
          <li key={i}>
            <ProjectCard data={item} />
          </li>
        ))}
      </List>
    </Contanier>
  );
}

const Contanier = styled.div`
  padding: 60px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;

  li {
    width: 30%;
  }
`;

const CardStyle = styled(Card)`
  p {
    margin-block: 16px;
    font-weight: 500;
  }
`;

const MemberList = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: flex-start;
  & > div {
    width: 40px;
  }
  .name {
    margin-top: 7px;
  }
`;
