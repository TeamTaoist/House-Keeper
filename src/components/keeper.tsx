import styled from "@emotion/styled";

export default function Keeper() {
  return (
    <KeeperStyle>
      <img
        src="https://img0.baidu.com/it/u=187070227,2985336747&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"
        alt=""
      />
      <span>Rebase Hacker House：DAO Tools</span>
    </KeeperStyle>
  );
}

const KeeperStyle = styled.div`
  display: flex;
  gap: 16px;
  margin-block: 16px;
  color: #666;
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;
