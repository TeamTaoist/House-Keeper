import styled from "@emotion/styled";
export default function Header() {
  return (
    <HeaderStyle>
      <a href="/">Home</a>
      <a href="/create_house">Create House</a>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
