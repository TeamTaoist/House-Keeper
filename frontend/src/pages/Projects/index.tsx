import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HackerAvatar from "components/hackerAvatar";

const ProjectCard = () => {
  return (
    <CardStyle>
      <img
        style={{ width: "100%" }}
        src="https://www.thesprucepets.com/thmb/APYdMl_MTqwODmH4dDqaY5q0UoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg"
        alt=""
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center" }}
        >
          Build dApps on Vara Network
        </Typography>
        <p>项目简介</p>
        <Typography variant="body2" color="text.secondary">
          作为创新的引领者，Gear's Hacker House 将让你 晋身千
          Web3技术前沿，与来自全球的开发者一同 探索非EVM 生态的独特魅力，在Vara
          Network 上构建去中心化应用，挑战创新极限！无论你是富
          有经验的技术大牛，还是刚踏入区块链领域的新
          手，欢迎加入我们，一起燃起激情，汇聚创意、洴 发思维的火花！
        </Typography>
        <p>Github地址</p>
        <Typography variant="body2" color="text.secondary">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            https://github.com
          </a>
        </Typography>
        <p>项目成员</p>
        <MemberList>
          <HackerAvatar name="Li Lei" size="40px" />
          <HackerAvatar name="Li Lei" size="40px" />
        </MemberList>
      </CardContent>
    </CardStyle>
  );
};

export default function Projects() {
  return (
    <Contanier>
      <List>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
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
