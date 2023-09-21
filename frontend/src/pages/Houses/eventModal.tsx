import styled from "@emotion/styled";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IEvent } from "types/contentTypes";
import { formatTime } from "utils/time";

interface IProps {
  data?: IEvent;
  handleClose: () => void;
}
export default function EventModal({ data, handleClose }: IProps) {
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
        <img src={data?.cover} alt="" />
        <Typography variant="h5" component="h2">
          {data?.title}
        </Typography>
        <Typography variant="h6" component="p">
          {data?.description}
        </Typography>
        <Typography variant="body2" component="p">
          {data?.description}
        </Typography>
        <Typography variant="body2" component="p">
          Date: {formatTime(data?.startDate)} - {formatTime(data?.endDate)}
        </Typography>
      </BoxStyle>
    </Modal>
  );
}

const BoxStyle = styled(Box)`
  background-color: #fff;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  img {
    width: 100%;
  }
`;
