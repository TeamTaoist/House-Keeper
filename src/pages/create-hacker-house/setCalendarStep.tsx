import styled from "@emotion/styled";
import { useState } from "react";
import Button from "@mui/material/Button";


interface IProps {
  onCreate: () => void;
}


export default function SetCalendarStep({ onCreate }: IProps) {
  const [calendarLink, setCalendarLink] = useState("");
  return (
    <SectionBlock>
      <h2>Set time available for interviews</h2>
      <p>
        open{" "}
        <a href="cal.com" target="_blank" rel="noopener noreferrer">
          cal.com
        </a>
        , and paste your calendar link here.
      </p>
      <CalendarInput
        type="text"
        placeholder="input your calendar link"
        value={calendarLink}
        onChange={(e) => setCalendarLink(e.target.value)}
      />
      <OptionBox>
        <Button variant="contained" onClick={onCreate}>
          Create
        </Button>
      </OptionBox>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CalendarInput = styled.input`
  height: 37px;
  width: 300px;
  padding-inline: 10px;
`;

const OptionBox = styled.div`
  text-align: center;
  margin-top: 40px;
`;
