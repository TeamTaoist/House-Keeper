import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StatusTag from "components/statusTag";
import HackerAvatar from "components/hackerAvatar";
import request from "request/index";
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router";
import {
  ApiHouseHouse,
  IHouse,
  ApiEventEvent,
  IEvent,
  ApiProjectProject,
  IProject,
  ApiHouseHackerHouseHacker,
  IUser,
} from "types/contentTypes";
import EventModal from "./eventModal";
import ProjectModal from "./projectModal";

const formatImg = (path: string) => {
  return `https://hk-strapi.taoist.dev/${path}`
}

export default function HouseInfo() {
  const { id } = useParams();
  const [data, setData] = useState<IHouse>();
  const [events, setEvents] = useState<IEvent[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [hackers, setHackers] = useState<IUser[]>([]);
  const [showEvent, setShowEvent] = useState<IEvent>();
  const [showProj, setShowProj] = useState<IProject>();

  useEffect(() => {
    const getDetail = () => {
      request
        .findOne<ApiHouseHouse>("houses", Number(id), {
          populate: "*",
        })
        .then((res) => {
          setData({
            ...res.data.attributes,
            id: res.data.id,
            cover: formatImg(res.data.attributes.cover.data.attributes.url),
          });
        });
          
    };
    getDetail();
  }, [id]);

  useEffect(() => {
    const getDetail = () => {
      request
        .find<ApiEventEvent[]>("events", {
          filters: {
            house: {
              id: { $eq: id },
            },
          },
          populate: "*",
        })
        .then((res) => {
          setEvents(
            res.data.map((item) => ({
              ...item.attributes,
              cover: formatImg(item.attributes.cover.data.attributes.url),
            }))
          );
        });
    };
    getDetail();
  }, [id]);

  useEffect(() => {
    const getDetail = () => {
      request
        .find<ApiProjectProject[]>("projects", {
          filters: {
            house: {
              id: { $eq: id },
            },
          },
          populate: "*",
        })
        .then((res) => {
          setProjects(
            res.data.map((item) => ({
              ...item.attributes,
              cover: formatImg(item.attributes.cover.data.attributes.url),
            }))
          );
        });
    };
    getDetail();
  }, [id]);

  useEffect(() => {
    const getDetail = () => {
      request
        .find<ApiHouseHackerHouseHacker[]>("house-hackers", {
          filters: {
            house: {
              id: { $eq: id },
            },
          },
          populate: "*",
        })
        .then((res) => {
          let lst: IUser[] = [];
          res.data.forEach((item) => {
            lst = lst.concat(item.attributes.users_permissions_user || []);
          });
          setHackers(res.data.map((item) => item.attributes.users_permissions_user.data.attributes));
        });
    };
    getDetail();
  }, [id]);

  const Status = useMemo(() => {
    if (!data) {
      return <></>;
    }
    const now = new Date().getTime();
    const start = new Date(data.startDate).getTime();
    const end = new Date(data.endDate).getTime();
    if (now < start) {
      return <StatusTag text={"报名中"} size="16px" />;
    } else if (now < end) {
      return <StatusTag text={"进行中"} size="16px" />;
    } else {
      return <StatusTag text={"已结束"} size="16px" />;
    }
  }, [data]);
  return (
    <Container>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <img style={{ width: "100%" }} src={data?.cover} alt="" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center" }}
            >
              {data?.title}
            </Typography>
            <StatusBox>{Status}</StatusBox>
            <Typography variant="body2" color="text.secondary">
              {data?.description}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <section>
          <SectionTitle gutterBottom variant="h5">
            Events
          </SectionTitle>
          <List>
            {events.map((item, i) => (
              <li key={i} onClick={() => setShowEvent(item)}>
                <Card>{item.title}</Card>
              </li>
            ))}
          </List>
        </section>
        <section>
          <SectionTitle gutterBottom variant="h5">
            Projects
          </SectionTitle>
          <List>
            {projects.map((item, i) => (
              <li key={i} onClick={() => setShowProj(item)}>
                <Card>{item.name}</Card>
              </li>
            ))}
          </List>
        </section>
        <section>
          <SectionTitle gutterBottom variant="h5">
            Hackers
          </SectionTitle>
          <HackerList>
            {hackers.map((item, i) => (
              <li key={i}>
                <HackerAvatar name={item.username} />
              </li>
            ))}
          </HackerList>
        </section>
      </div>
      {showEvent && (
        <EventModal
          handleClose={() => setShowEvent(undefined)}
          data={showEvent}
        />
      )}
      {showProj && (
        <ProjectModal
          handleClose={() => setShowProj(undefined)}
          data={showProj}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 120px;
  padding: 60px;
  section {
    margin-bottom: 30px;
  }
`;

const StatusBox = styled.div`
  text-align: center;
  margin-block: 40px;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  li {
    width: 150px;
    height: 70px;
    text-align: center;
    line-height: 70px;
    cursor: pointer;
  }
`;

const HackerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  li {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img-box {
    width: 70px;
    border-radius: 50%;
    border: 2px solid #000;
    height: 70px;
    box-sizing: border-box;
  }
  img {
    width: 100%;
  }
`;
