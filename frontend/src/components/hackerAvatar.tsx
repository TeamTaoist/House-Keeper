import styled from "@emotion/styled";

interface IHackerProps {
  name: string;
  size?: "large";
}

export default function HackerAvatar({ name, size }: IHackerProps) {
  return (
    <HackerAvatarStyle size={size}>
      <div>
        <img
          src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${name}`}
          alt="avatar"
        />
      </div>
      <p>{name}</p>
    </HackerAvatarStyle>
  );
}

const HackerAvatarStyle = styled.div<{ size?: string }>`
  text-align: center;
  width: 100%;
  img {
    width: ${(props) => (props.size === "large" ? "80px" : "70px")};
    height: ${(props) => (props.size === "large" ? "80px" : "70px")};
    border-radius: 50%;
    border: 2px solid #000;
  }
  p {
    font-size: ${(props) => (props.size === "large" ? "18px" : "14px")};
    margin-top: 15px;
  }
`;
