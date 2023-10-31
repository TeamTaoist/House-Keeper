import styled from "@emotion/styled";
import Card from "@mui/material/Card";

export const HouseItemStyled = styled(Card)`
  padding: 16px;
  cursor: pointer;
  img.banner {
    width: 100%;
    margin-block: 8px;
  }
`;

export const HouseColumnCard = styled.div`
  background-color: #f2f4d3;
  padding: 16px;
  cursor: pointer;
  img.banner {
    width: 100%;
    margin-block: 8px;
  }
  border-radius: 8px;
`;

export const HouseItemFullWidthCard = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    .banner-box {
      width: 50%;
    }
    img.banner {
      width: 100%;
      max-width: 630px;
    }
  }
  .bottom {
    margin-top: 30px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-block: 6px;
`;

export const Host = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
  font-weight: bold;
  font-size: 13px;
  margin-top: 8px;
  img {
    width: 28px;
    border-radius: 50%;
  }
`;

export const Intro = styled.div`
  line-height: 18px;
  color: #666;
  font-size: 12px;
  p {
    margin-block: 8px;
  }
`;

export const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: #26daca;
  font-size: 12px;
  gap: 10px;
  > div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
