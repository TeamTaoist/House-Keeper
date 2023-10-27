import styled from "@emotion/styled";
import { PageStyle } from "../../assets/styles/global";
import { useEffect, useMemo, useState } from "react";
import { HouseStatus } from "../../@types/house";
import Grid from "@mui/material/Grid";
import HouseItem from "../../components/houseItem";

export default function ExploreHouses() {
  const [selectStatus, setSelectStatus] = useState<string | HouseStatus>("all");
  const statusOptions = useMemo(() => {
    return [
      {
        label: "All",
        value: "all",
      },
      { label: "Coming Soon", value: HouseStatus.NotStart },
      { label: "In progress", value: HouseStatus.InProgress },
      { label: "Ended", value: HouseStatus.Ended },
    ];
  }, []);

  const getHouses = async () => {
    // TODO
    // try {
    // } catch (error) {
    // } finally {
    // }
  };

  useEffect(() => {
    getHouses();
  }, [selectStatus]);

  return (
    <PageStyle>
      <h1>Hacker House</h1>
      <p>All published Hacker House in House Keeper.</p>
      <OptionBox>
        <StatusBox>
          {statusOptions.map((option, index) => (
            <li
              key={index}
              className={selectStatus === option.value ? "selected" : ""}
              onClick={() => setSelectStatus(option.value)}
            >
              {option.label}
            </li>
          ))}
        </StatusBox>
        <SearchInput placeholder="Search" />
      </OptionBox>
      <ContentBox>
        <Grid container spacing={2}>
          {new Array(20).fill(0).map((item, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <HouseItem />
            </Grid>
          ))}
        </Grid>
      </ContentBox>
    </PageStyle>
  );
}

const OptionBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatusBox = styled.ul`
  display: flex;
  gap: 16px;
  li {
    border-radius: 6px;
    border: 1px solid #ccc;
    padding-inline: 10px;
    cursor: pointer;
    line-height: 26px;
    &.selected {
      background-color: #000;
      color: #fff;
    }
  }
`;

const SearchInput = styled.input`
  min-width: 260px;
  max-width: 100%;
  padding-inline: 10px;
  height: 37px;
  border-radius: 4px;
`;

const ContentBox = styled.div``;
