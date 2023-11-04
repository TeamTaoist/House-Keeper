import * as React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import { DialogContent } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
interface IProps {
  open: boolean;
  onClose: () => void;
}

export default function AddHackerModal({ onClose, open }: IProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Content>
        <DialogHeader>
          <div>Search Hacker</div>{" "}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogHeader>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            确认添加
          </Button>
        </DialogActions>
      </Content>
    </Dialog>
  );
}

const DialogHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const Content = styled(DialogContent)`
    width: 500px;
    padding-inline: 24px;
`