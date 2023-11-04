import styled from "@emotion/styled";
import { PageStyle } from "../../assets/styles/global";
import ManageHouseItem from "../../components/house-card-item/manage-house";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

function createData(
  name: string,
  hadInterviewd: boolean,
  arrangement: string,
  record: string,
  isSelected: boolean,
  signed: boolean
) {
  return { name, hadInterviewd, arrangement, record, isSelected, signed };
}

const rows = new Array(20).fill(
  createData(
    "Name",
    true,
    "September 29  10:30 – 11:00am UTC+8",
    "123",
    true,
    false
  )
);

export default function RegistrationResult() {
  return (
    <PageStyle>
      <ManageHouseItem />
      <TableBox>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User (20)</TableCell>
              <TableCell align="center">Interview</TableCell>
              <TableCell align="center">Interview arrangemen</TableCell>
              <TableCell align="center">Interview record</TableCell>
              <TableCell align="center">Be selected</TableCell>
              <TableCell align="center">Agreement signing</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <User>
                    {" "}
                    <Avatar />
                    <span>{row.name}</span>
                  </User>
                </TableCell>
                <TableCell align="center">
                  <Checkbox defaultChecked={row.hadInterviewd} />
                </TableCell>
                <TableCell align="center">{row.arrangement}</TableCell>
                <TableCell align="center">{row.record}</TableCell>
                <TableCell align="center">
                  <Checkbox defaultChecked={row.isSelected} />
                </TableCell>
                <TableCell align="center">
                  <Checkbox defaultChecked={row.signed} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableBox>
    </PageStyle>
  );
}

const TableBox = styled.div`
  margin-top: 40px;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Avatar = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
`;
