import { PageStyle } from "../assets/styles/global";
import styled from "@emotion/styled";

export default function MyHousePage() {
  return (
    <PageStyle>
      <HouseList>
        {new Array(20).fill(0).map((item, index) => (
          <HouseItem key={index}>
            <LeftBox>
              <HouseLogo
                src="https://img0.baidu.com/it/u=187070227,2985336747&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"
                alt=""
              />
              <div>
                <Title>Rebase Hacker House</Title>
                <ProjectList>
                  {new Array(Math.round(Math.random() * 10))
                    .fill(0)
                    .map((project, idx) => (
                      <ProjectAvatar
                        key={idx}
                        href={`${window.location.origin}/#/project/${1}`}
                        target="_blank"
                      >
                        <img
                          src="https://img0.baidu.com/it/u=187070227,2985336747&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"
                          alt=""
                        />
                        {Math.random() > 0.5 && <Mask>⚠️</Mask>}
                      </ProjectAvatar>
                    ))}
                </ProjectList>
              </div>
            </LeftBox>
            <RightBox>
              {Math.random() > 0.5 ? (
                <StatusTag>Joined</StatusTag>
              ) : (
                <ClosedStatusTag>Closed</ClosedStatusTag>
              )}
            </RightBox>
          </HouseItem>
        ))}
      </HouseList>
    </PageStyle>
  );
}

const HouseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const HouseItem = styled.div`
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px 40px;
`;

const LeftBox = styled.div`
  display: flex;
  gap: 16px;
`;

const RightBox = styled.div``;

const HouseLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
const Title = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const ProjectList = styled.div`
  display: flex;
  gap: 10px;
`;

const ProjectAvatar = styled.a`
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  img {
    width: 32px;
    height: 32px;
  }
`;

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  text-align: center;
  line-height: 32px;
`;

const StatusTag = styled.span`
  display: inline-block;
  color: #fff;
  padding-inline: 12px;
  background-color: green;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  border-radius: 8px;
`;

const ClosedStatusTag = styled(StatusTag)`
  background-color: #aaa;
`;
