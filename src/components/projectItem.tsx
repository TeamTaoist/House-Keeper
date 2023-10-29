import styled from "@emotion/styled";

export default function ProjectItem() {
  return (
    <ProjectStyle>
      <Banner>
        <img
          className="logo"
          src="https://img0.baidu.com/it/u=187070227,2985336747&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"
          alt=""
        />
      </Banner>
      <Title
        onClick={() => window.open(`${window.location.origin}/#/project/${1}`)}
      >
        Project name. No more than 20 words
      </Title>
      <Intro>
        As a leader in innovation, Gear's Hacker House will put you at the
        forefront of Web3 technology, building decentralized applications on the
        Vara Network and pushing the limits of innovation!{" "}
      </Intro>
    </ProjectStyle>
  );
}

const ProjectStyle = styled.div``;

const Banner = styled.div`
  height: 120px;
  background-color: #ccc;
  position: relative;
  .logo {
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    right: 30px;
    bottom: -14px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 22px;
  cursor: pointer;
`;

const Intro = styled.div`
  line-height: 18px;
  color: #666;
  font-size: 12px;
`;
