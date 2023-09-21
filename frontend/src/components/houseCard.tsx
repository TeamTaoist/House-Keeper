import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function HouseCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <StatusBox>
        <span className="status">进行中</span>
      </StatusBox>
      <CardContentStyle>
        <Typography variant="h5" component="div">
          Build dApps on Vara Network
        </Typography>

        <Typography variant="body2">Gear Hacker House 上海</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          09.16-9.22
        </Typography>
      </CardContentStyle>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}

const CardContentStyle = styled(CardContent)`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StatusBox = styled.div`
  text-align: right;
  padding-top: 10px;
  padding-right: 10px;
  .status {
    border-radius: 5px;
    padding: 4px 10px;
    background-color: #000;
    color: #fff;
    font-size: 12px;
  }
`;
