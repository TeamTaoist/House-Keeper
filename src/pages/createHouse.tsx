import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateHousePage() {
  const navigate = useNavigate();
  const [calendarLink, setCalendarLink] = useState("");
  const goApplyPage = () => {
    navigate("/apply");
  };
  return (
    <Page>
      <section>
        <h5>选择模版</h5>
        <TemplatesBox>
          <div>
            <p>模板1</p>
            <a
              href="https://tally.so/r/3NXLpl"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看
            </a>
          </div>
          <div>
            <p>模板2</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              查看
            </a>
          </div>
          <div>
            <p>模板3</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              查看
            </a>
          </div>
        </TemplatesBox>
      </section>
      <section>
        <h5>日历链接</h5>
        <CalendarInput
          type="text"
          placeholder="input your calendar link"
          value={calendarLink}
          onChange={(e) => setCalendarLink(e.target.value)}
        />
      </section>
      <OperateBox>
        <button onClick={goApplyPage}>下一步</button>
      </OperateBox>
    </Page>
  );
}

const Page = styled.div`
  padding: 40px;
`;

const OperateBox = styled.div`
  margin-top: 40px;
`;

const TemplatesBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  div {
    flex: 1;
    border-radius: 10px;
    border: 1px solid #ddd;
    cursor: pointer;
    padding-bottom: 10px;
  }
`;

const CalendarInput = styled.input`
  height: 37px;
  width: 300px;
  padding-inline: 10px;
`;
