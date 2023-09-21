import styled from "@emotion/styled";

interface IHackerProps {
  name: string;
  size?: string;
  fontSize?: string;
}

export default function HackerAvatar({ name, ...props }: IHackerProps) {
  return (
    <HackerAvatarStyle {...props}>
      <div>
        <img
          src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${name}`}
          alt="avatar"
        />
      </div>
      <p className="name">{name}</p>
    </HackerAvatarStyle>
  );
}

const HackerAvatarStyle = styled.div<{ size?: string; fontSize?: string }>`
  text-align: center;
  width: 100%;
  img {
    width: ${(props) => props.size || "70px"};
    height: ${(props) => props.size || "70px"};
    border-radius: 50%;
    border: 2px solid #000;
    background-color: #fff;
  }
  p {
    font-size: ${(props) => props.fontSize || "14px"};
    margin-top: 15px;
  }
`;
