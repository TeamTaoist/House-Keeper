import styled from "@emotion/styled";
import { PageStyle } from "../../assets/styles/global";
import ManageHouseItem from "../../components/house-card-item/manage-house";

export default function ManageHackerHouse() {
  return (
    <PageStyle>
      <HouseList>
        {new Array(10).fill(0).map((item, index) => (
          <ManageHouseItem key={index}>
            <EditBpx>
              <p>last Edit at Sep 7, 2023 10:00 a.m.</p>
            </EditBpx>
          </ManageHouseItem>
        ))}
      </HouseList>
    </PageStyle>
  );
}

const HouseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EditBpx = styled.div`
  color: #666;
  margin-top: 16px;
`;
