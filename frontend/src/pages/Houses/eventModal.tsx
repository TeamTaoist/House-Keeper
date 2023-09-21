import styled from "@emotion/styled";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IEvent 
} from "types/contentTypes";
import { formatTime } from "utils/time";

interface IProps {
  data?: IEvent;
  handleClose: () => void;
}
export default function EventModal({ data, handleClose }: IProps) {
    console.log('data:', data)
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
        <Typography variant="h5" component="h2">
          {data?.title}
        </Typography>
        <Typography variant="h6" component="p">
          {data?.description}
        </Typography>
        <Typography variant="body2" component="p">
          {data?.description}
              </Typography>
              <div>
                  时间：{formatTime(data?.startDate)} - {formatTime(data?.endDate)}
              </div>
      </BoxStyle>
    </Modal>
  );
}

const BoxStyle = styled(Box)`
    background-color: #fff;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;