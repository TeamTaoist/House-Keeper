import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StatusTag from "components/statusTag";
import HackerAvatar from "components/hackerAvatar";

export default function HouseInfo() {
  return (
    <Container>
      <div>
        <Card sx={{ maxWidth: 345 }}>
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
            <StatusBox>
              <StatusTag text={"进行中"} size="16px" />
            </StatusBox>
            <Typography variant="body2" color="text.secondary">
              作为创新的引领者，Gear's Hacker House 将让你 晋身千
              Web3技术前沿，与来自全球的开发者一同 探索非EVM
              生态的独特魅力，在Vara Network
              上构建去中心化应用，挑战创新极限！无论你是富
              有经验的技术大牛，还是刚踏入区块链领域的新
              手，欢迎加入我们，一起燃起激情，汇聚创意、洴 发思维的火花！
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
            <li>
              <Card>workshop</Card>
            </li>
            <li>
              <Card>workshop</Card>
            </li>
            <li>
              <Card>workshop</Card>
            </li>
            <li>
              <Card>workshop</Card>
            </li>
          </List>
        </section>
        <section>
          <SectionTitle gutterBottom variant="h5">
            Projects
          </SectionTitle>
          <List>
            <li>
              <Card>workshop</Card>
            </li>
            <li>
              <Card>workshop</Card>
            </li>
            <li>
              <Card>workshop</Card>
            </li>
            <li>
              <Card>workshop</Card>
            </li>
          </List>
        </section>
        <section>
          <SectionTitle gutterBottom variant="h5">
            Hackers
          </SectionTitle>
          <HackerList>
            <li>
              <HackerAvatar name="Han Maymay" />
            </li>
            <li>
              <HackerAvatar name="Han Maymay" />
            </li>
          </HackerList>
        </section>
      </div>
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
