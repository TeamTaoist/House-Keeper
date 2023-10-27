import styled from "@emotion/styled";
import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";

interface IProps {
  show: boolean;
  handleClose: () => void;
}

export default function FormModal({ show, handleClose }: IProps) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://tally.so/widgets/embed.js";
    s.onload = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Tally.loadEmbeds();
    };
    s.type = "text/javascript";
    document.getElementById("tally-root")?.appendChild(s);
  }, []);
  return (
    <ModalContent show={show} backdrop="static">
      <ModalTitle>
        <button onClick={handleClose}>关闭</button>
      </ModalTitle>
      <div id="tally-root">
        <iframe
          data-tally-src="https://tally.so/embed/3NXLpl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&gmail=zzz@gmail.com&id=abcd"
          loading="lazy"
          width="100%"
          height="200"
          title="JoannaOriginForm"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </ModalContent>
  );
}

const ModalContent = styled(Modal)`
  width: 50%;
  height: 100vh;
  background-color: #fff;
  color: #333;
  
`;

const ModalTitle = styled(Modal.Title)`
  text-align: right;
  margin-bottom: 10px;
  padding-top: 10px;
`;