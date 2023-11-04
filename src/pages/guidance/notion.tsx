import { useParams } from "react-router-dom";
import { PageStyle } from "../../assets/styles/global";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";

export default function GuidanceNotion() {
  const { id } = useParams();
  const [data, setData] = useState<any>();
  console.log("id:", id);

  useEffect(() => {
    const getNotionData = () => {
      fetch(
        `https://notion-api.splitbee.io/v1/page/${id}`,
        { method: "GET" }
      )
        .then((res) => res.json())
        .then((recordMap) => {
          console.log("recordMap: ", recordMap);
          setData(recordMap);
        });
    };
    id && getNotionData();
  }, [id]);

  return (
    <PageStyle>
      <Content>{data && <NotionRenderer blockMap={data} fullPage={true} />}</Content>
    </PageStyle>
  );
}

const Content = styled.div`
  background-color: #fff;
  min-height: calc(100vh - 60px);
`;
