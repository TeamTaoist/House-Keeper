import styled from "@emotion/styled";
import { FormEvent, useState } from "react";
// import { useParams } from "react-router-dom";

import { PageStyle } from "../../assets/styles/global";
import ManageHouseItem from "../../components/house-card-item/manage-house";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import AddHackerModal from "../../components/addHackerModal";
import Button from "@mui/material/Button";

export default function ApplyProjectPage() {
  //   const { id } = useParams();
  const [poster, setPoster] = useState("");
  const [logo, setLogo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const getBase64 = (imgUrl: string, callback: (v: string) => void) => {
    window.URL = window.URL || window.webkitURL;
    const xhr = new XMLHttpRequest();
    xhr.open("get", imgUrl, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      if (this.status === 200) {
        const blob = this.response;
        const oFileReader = new FileReader();
        oFileReader.onloadend = function (e) {
          const { result } = e.target as any;
          callback && callback(result);
        };
        oFileReader.readAsDataURL(blob);
      }
    };
    xhr.send();
  };

  const updatePoster = (e: FormEvent) => {
    const { files } = e.target as any;
    const url = window.URL.createObjectURL(files[0]);
    getBase64(url, (v: string) => setPoster(v));
  };

  const updateLogo = (e: FormEvent) => {
    const { files } = e.target as any;
    const url = window.URL.createObjectURL(files[0]);
    getBase64(url, (v: string) => setLogo(v));
  };

  const handleCloseModal = () => {
    // TODO
    setShowModal(false);
  };

  const handleSubmit = () => {
    // TODO;
  };

  return (
    <PageStyle>
      {showModal && (
        <AddHackerModal open={showModal} onClose={handleCloseModal} />
      )}
      <ManageHouseItem />
      <ApplyBox>
        <Row>
          <TextField required label="Project name" fullWidth />
        </Row>
        <Row>
          <TextField required label="Intro" multiline rows={4} fullWidth />
        </Row>
        <Row>
          <TextField required label="Source code" fullWidth />
        </Row>
        <Row>
          <TextField label="Website" fullWidth />
        </Row>
        <Row>
          <ItemLabel>Add project members</ItemLabel>
          <HackerBox>
            {new Array(5).fill(0).map((v, i) => (
              <HackerItem key={i}>
                <HackerAvatarBox>
                  <CancelIcon className="btn-delete" />
                </HackerAvatarBox>
                <HackerName>name</HackerName>
              </HackerItem>
            ))}
            <HackerItem>
              <PlusCircleButton onClick={() => setShowModal(true)}>
                <AddIcon />
              </PlusCircleButton>
            </HackerItem>
          </HackerBox>
        </Row>
        <RowCols>
          <Row>
            <ItemLabel>Upload a poster</ItemLabel>
            <UploadBox htmlFor="fileUpload" onChange={updatePoster}>
              {poster ? (
                <ImgBox onClick={() => setPoster("")}>
                  <img src={poster} alt="" />
                </ImgBox>
              ) : (
                <div>
                  <input
                    id="fileUpload"
                    type="file"
                    hidden
                    accept=".jpg, .jpeg, .png"
                  />
                </div>
              )}
            </UploadBox>
          </Row>
          <Row>
            <ItemLabel>Upload Host Logo</ItemLabel>
            <UploadBox htmlFor="fileUpload" onChange={updateLogo}>
              {poster ? (
                <ImgBox onClick={() => setLogo("")}>
                  <img src={logo} alt="" />
                </ImgBox>
              ) : (
                <div>
                  <input
                    id="fileUpload"
                    type="file"
                    hidden
                    accept=".jpg, .jpeg, .png"
                  />
                </div>
              )}
            </UploadBox>
          </Row>
        </RowCols>
        <OptionBox>
          <Button variant="contained" size="large" onClick={handleSubmit}>
            Submit
          </Button>
          <SubmitTip>You can modify your Project information later.</SubmitTip>
        </OptionBox>
      </ApplyBox>
    </PageStyle>
  );
}

const ApplyBox = styled.div`
  margin-block: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  width: 100%;
`;

const RowCols = styled(Row)`
  display: flex;
  gap: 30px;
  & > div {
    flex: 1;
  }
`;

const ItemLabel = styled.div``;

const UploadBox = styled.label`
  background: #f8f8f8;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 20px;
  font-family: "Inter-Regular";
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  .iconRht {
    margin-right: 10px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .del {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    //display: flex;
    align-items: center;
    justify-content: center;
    background: #a16eff;
    opacity: 0.5;
    color: #fff;
    cursor: pointer;
    .iconTop {
      font-size: 40px;
    }
  }
  &:hover {
    .del {
      display: flex;
    }
  }
`;

const HackerBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const HackerItem = styled.li``;

const HackerAvatarBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #000;
  position: relative;
  .btn-delete {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const PlusCircleButton = styled(HackerAvatarBox)`
  text-align: center;
  svg {
    margin-top: 18px;
  }
  cursor: pointer;
`;

const HackerName = styled.p`
  text-align: center;
  margin-top: 10px;
`;

const OptionBox = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const SubmitTip = styled.p`
  margin-top: 16px;
`;
