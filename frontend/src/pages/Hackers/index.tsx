import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface IHackerProps {
  name: string;
}

const Hacker = ({ name }: IHackerProps) => {
  return (
    <li>
      <div>
        <img
          src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${name}`}
          alt="avatar"
        />
      </div>
      <p>{name}</p>
    </li>
  );
};

export default function Hackers() {
  return (
    <Container>
      <div className="left">
        <Typography variant="h5" component="div">
          All hackers
        </Typography>
        <HackerList>
          {Array.from({ length: 10 }).map((_, index) => (
            <Hacker name="HAN MAYMAY" key={index} />
          ))}
        </HackerList>
      </div>
      <div className="right">
        <HackerCard>
          <HackerCardHead>
            <img
              src="https://api.dicebear.com/7.x/lorelei/svg?seed=2"
              alt="avatar"
            />
            <Typography variant="h5" component="div" className="name">
              HAN MAYMAY
            </Typography>
          </HackerCardHead>
          <CardContent>
            <ItemBox>
              <ItemTitle>
                <span>Github</span>
              </ItemTitle>
              <ItemContent>
                <a href="12" target="_blank">
                  https://github.com
                </a>
              </ItemContent>
            </ItemBox>
            <ItemBox>
              <ItemTitle>
                <span>HackerHouse</span>
              </ItemTitle>
              <ItemContent>
                <List>
                  <Link to={`/house/${1}`}>
                    <ProjectBox></ProjectBox>
                  </Link>
                  <Link to={`/house/${1}`}>
                    <ProjectBox></ProjectBox>
                  </Link>
                  <Link to={`/house/${1}`}>
                    <ProjectBox></ProjectBox>
                  </Link>
                </List>
              </ItemContent>
            </ItemBox>
            <ItemBox>
              <ItemTitle>
                <span>Project</span>
              </ItemTitle>
              <ItemContent>
                <List>
                  <Link to={`/project/${1}`}>
                    <ProjectBox></ProjectBox>
                  </Link>
                  <Link to={`/project/${1}`}>
                    <ProjectBox></ProjectBox>
                  </Link>
                  <Link to={`/project/${1}`}>
                    <ProjectBox></ProjectBox>
                  </Link>
                </List>
              </ItemContent>
            </ItemBox>
          </CardContent>
          <ActionBox>
            <Button>
              <ThumbUpOffAltIcon />
              <Num>233</Num>
            </Button>
          </ActionBox>
        </HackerCard>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  padding-inline: 40px;
  & > div {
    height: 100%;
  }
  .left {
    flex: 2;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const HackerCard = styled(Card)`
  width: 400px;
  padding: 20px;
`;

const HackerCardHead = styled.div`
  text-align: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #000;
  }
  .name {
    margin-block: 15px;
  }
`;

const Num = styled.span`
  margin-left: 5px;
`;

const ItemBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ItemTitle = styled.div`
  span {
    padding: 4px 8px;
    background-color: #000;
    color: #fff;
    width: 100px;
    text-align: center;
    border-radius: 20px;
    display: inline-block;
  }
`;

const ItemContent = styled.div`
  flex: 1;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ProjectBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #000;
  display: inline-block;
  cursor: pointer;
`;

const ActionBox = styled(CardActions)`
  display: flex;
  justify-content: center;
`;

const HackerList = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  flex-wrap: wrap;
  li {
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 2px solid #000;
    }
    p {
      margin-top: 10px;
    }
  }
`;
