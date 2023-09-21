import styled from "@emotion/styled";

interface IProps {
  text: string;
  size?: string;
}
export default function StatusTag({ text, size }: IProps) {
  return <Tag style={{ fontSize: size || "12px" }}>{text}</Tag>;
}

const Tag = styled.span`
  border-radius: 5px;
  padding: 4px 10px;
  background-color: #000;
  color: #fff;
`;
