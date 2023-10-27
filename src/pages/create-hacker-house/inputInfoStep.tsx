import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { FormEvent, useState } from "react";
import RangeDatePicker from "../../components/rangeDatePicker";
import Button from "@mui/material/Button";

interface IProps {
  onNext: () => void;
}

export default function InputInfoStep({ onNext }: IProps) {
  const [poster, setPoster] = useState("");
  const [logo, setLogo] = useState("");
  const [startDate] = useState();
  const [endDate] = useState();
  const onChangeRange = () => {
    // TODO
  };
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
  return (
    <SectionBlock>
      <Row>
        <TextField required label="Topic" fullWidth />
      </Row>
      <Row>
        <TextField required label="Intro" multiline rows={4} fullWidth />
      </Row>
      <Row>
        <TextField required label="Location" fullWidth />
      </Row>
      <Row>
        <RangeDatePicker
          startDate={startDate}
          endDate={endDate}
          onChange={onChangeRange}
          placeholder="start date ~ end date"
        />
      </Row>
      <RowCols>
        <Row>
          <TextField required label="Host" fullWidth />
        </Row>
        <Row>
          <RangeDatePicker
            placeholder="Application deadline*"
            endDate={endDate}
            onChange={onChangeRange}
          />
        </Row>
      </RowCols>
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
        <Button variant="contained" onClick={onNext}>
          Next
        </Button>
      </OptionBox>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  margin-top: 20px;
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

const OptionBox = styled.div`
  text-align: center;
  margin-top: 40px;
`;
