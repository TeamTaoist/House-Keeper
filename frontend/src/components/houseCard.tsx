import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { IHouse } from "types/contentTypes";
import { formatDate } from "utils/time";
import { useMemo } from "react";

interface IProps {
  data: IHouse;
}

export default function HouseCard({ data }: IProps) {
  const navigate = useNavigate();

  const formatStatus = useMemo(() => {
    const now = new Date().getTime();
    const start = new Date(data.startDate).getTime();
    const end = new Date(data.endDate).getTime();
    if (now < start) {
      return "报名中";
    } else if (now < end) {
      return "进行中";
    } else {
      return "已结束";
    }
  }, [data]);

  return (
    <CardStyle sx={{ width: 345 }} onClick={() => navigate(`/house/${data.id}`)}>
      <StatusBox>
        <span className="status">{formatStatus}</span>
      </StatusBox>
      <CardContentStyle>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>

        <Typography variant="body2">{data.subtitle}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {formatDate(data.startDate)}-{formatDate(data.endDate)}
        </Typography>
      </CardContentStyle>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </CardStyle>
  );
}

const CardStyle = styled(Card)`
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

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
