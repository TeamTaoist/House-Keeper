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
  IUser
} from "types/contentTypes";

const formatImg = (path: string) => {
  return `https://hk-strapi.taoist.dev/${path}`;
};


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
          populate: "*",
        })
        .then((res) => {
          setHackers(
            res.data.map(
              (item) => item.attributes.users_permissions_user.data.attributes
            )
          );
        });
    };
    data.id && getHackers();
  }, [data.id]);
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
      request
        .find<ApiProjectProject[]>("projects", {
          populate: "*",
        })
        .then((res) => {
          console.log(res);
          setProjects(
            res.data.map((item) => ({
              ...item.attributes,
              id: item.id,
              cover: formatImg(item.attributes.cover.data.attributes.url),
            }))
          );
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
  align-items: stretch;
  align-content: stretch;

  li {
    width: 30%;
    align-self: stretch;
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
