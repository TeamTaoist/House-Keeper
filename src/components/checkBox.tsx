import styled from "@emotion/styled";
import OffImg from "../assets/images/off.svg";
import OnImg from "../assets/images/on.svg";

interface IProps {
  value?: boolean;
  children?: React.ReactNode;
  onChange?: (v: boolean) => void;
}

const CheckBox = ({ value, children, onChange }: IProps) => {
  const handleChange = () => {
    onChange && onChange(!value);
  };

  return (
    <CheckBoxStyle onClick={handleChange}>
      <img src={value ? OnImg : OffImg} alt="" />
      {children}
    </CheckBoxStyle>
  );
};

export default CheckBox;

const CheckBoxStyle = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 16px;
    cursor: pointer;
  }
`;
