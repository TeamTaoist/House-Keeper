import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export default function GuideBanner() {
  return (
    <Banner>
      <BannerTitle>Start Your Own Hacker House</BannerTitle>
      <BannerText>
        Still not sure how to host a hacker house ? Follow these guidelines
        below to get started👇
      </BannerText>
      <Cards>
        <li>
          <a
            href={`${window.location.origin}/how-to-docs`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardStyle>What is a hacker house</CardStyle>
          </a>
        </li>
        <li>
          <a
            href={`${window.location.origin}/how-to-docs`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardStyle>What is a hacker house</CardStyle>
          </a>
        </li>
        <li>
          <a
            href={`${window.location.origin}/how-to-docs`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardStyle>What is a hacker house</CardStyle>
          </a>
        </li>
      </Cards>

      <a
        href={`${window.location.origin}/how-to-docs`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="text">Explore More {">>"}</Button>
      </a>
    </Banner>
  );
}

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ddd;
  border-radius: 28px;
  box-sizing: border-box;
  padding-block: 30px;
  text-align: center;
`;

const BannerTitle = styled.h2`
  font-weight: 600;
`;

const BannerText = styled.div``;

const Cards = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const CardStyle = styled(Card)`
  width: 220px;
  height: 80px;
  line-height: 80px;
  cursor: pointer;
`;
