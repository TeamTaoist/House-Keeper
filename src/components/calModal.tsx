/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@emotion/styled";
import Modal from "react-bootstrap/Modal";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface IProps {
  show: boolean;
  handleClose: () => void;
}

export default function CalModal({ show, handleClose }: IProps) {
  useEffect(() => {
    const init = async () => {
      const cal = await getCalApi();
      cal("on", {
        action: "bookingSuccessful",
        //   calLink: "joannazzz/30min",
        callback: (e: { detail: any }) => {
          // `data` is properties for the event.
          // `type` is the name of the action(You can also call it type of the action.) This would be same as "ANY_ACTION_NAME" except when ANY_ACTION_NAME="*" which listens to all the events.
          // `namespace` tells you the Cal namespace for which the event is fired/
          const { data, type, namespace } = e.detail;
          console.log(data, type, namespace);
        },
      });
    };
    init();
  }, []);
  return (
    <ModalContent show={show} onHide={handleClose} backdrop="static">
      <Cal calLink="joannazzz/30min"></Cal>
    </ModalContent>
  );
}

const ModalContent = styled(Modal)`
  background-color: #fff;
  color: #333;
  margin: 0 auto;
  padding-top: 20px;
`;
