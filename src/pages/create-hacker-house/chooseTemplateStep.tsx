import styled from "@emotion/styled";
import CheckBox from "../../components/checkBox";
import Button from "@mui/material/Button";
import { useState } from "react";

interface IProps {
  onNext: () => void;
}

export default function ChooseTemplateStep({ onNext }: IProps) {
  const [select, setSelect] = useState(1);

  const handleSelect = (v: boolean, num: number) => {
    if (v) {
      setSelect(num);
    } else {
      setSelect(0);
    }
  };
  return (
    <SectionBlock>
      <h2>Select Registration Form</h2>
      <p>
        The registration form already contains 【Username】, 【Github】 and
        【Email】，Choose an registration form that suits your hacker house：
      </p>
      <TemplatesBox>
        <li>
          <SelectButton>
            <CheckBox
              value={select === 1}
              onChange={(v) => handleSelect(v, 1)}
            />
          </SelectButton>
          <p>模板1</p>
          <a
            href="https://tally.so/r/3NXLpl"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看
          </a>
        </li>
        <li>
          <SelectButton>
            <CheckBox
              value={select === 2}
              onChange={(v) => handleSelect(v, 2)}
            />
          </SelectButton>
          <p>模板2</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            查看
          </a>
        </li>
        <li>
          <SelectButton>
            <CheckBox
              value={select === 3}
              onChange={(v) => handleSelect(v, 3)}
            />
          </SelectButton>
          <p>模板3</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            查看
          </a>
        </li>
      </TemplatesBox>
      <OptionBox>
        <Button variant="contained" onClick={onNext}>
          Next
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

const TemplatesBox = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  li {
    text-align: center;
    flex: 1;
    border-radius: 10px;
    border: 1px solid #ddd;
    cursor: pointer;
    padding-bottom: 10px;
    position: relative;
  }
`;

const OptionBox = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const SelectButton = styled.div`
position: absolute;
left: 10px;
top: 10px;
`