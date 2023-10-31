import { PageStyle } from "../assets/styles/global";
import styled from "@emotion/styled";
import { useState, FormEvent } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditNoteIcon from "@mui/icons-material/EditNote";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Profile() {
  const [avatar, setAvatar] = useState<string>();
  const [bio, setBio] = useState<string>(
    "Here is Hacker's personal introduction. No more than 200 words. A smart contract engineer with 3 years experience contract engineer with 3 years experience.ngineer with 3 years experience.ngineer with 3 years experience."
  );
  const [github, setGithub] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isEdit, setIsEdit] = useState(false);

  const getBase64 = (imgUrl: string) => {
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
          setAvatar(result);
        };
        oFileReader.readAsDataURL(blob);
      }
    };
    xhr.send();
  };

  const updateLogo = (e: FormEvent) => {
    const { files } = e.target as any;
    const url = window.URL.createObjectURL(files[0]);
    getBase64(url);
  };

  const removeUrl = () => {
    setAvatar("");
  };
    
    const handleSaveProfile = () => {
        setIsEdit(false);
        // TODO
    };
    

  return (
    <PageStyle>
      <ProfileBox>
        <div className="inner">
          <div>
            <AvatarBox>
              <UploadBox htmlFor="fileUpload" onChange={(e) => updateLogo(e)}>
                {!avatar && (
                  <div>
                    <input
                      id="fileUpload"
                      type="file"
                      hidden
                      accept=".jpg, .jpeg, .png"
                    />
                    <UploadIcon />
                  </div>
                )}
                {!!avatar && (
                  <ImgBox onClick={() => removeUrl()}>
                    <div className="del">
                      <HighlightOffIcon className="iconTop" />
                    </div>
                    <img src={avatar} alt="" />
                  </ImgBox>
                )}
              </UploadBox>
            </AvatarBox>
          </div>
          <div className="right">
            <div className="top">
              <div>
                <div className="name">Name</div>
                <div className="wallet">
                  0xa2f87DC5ec6F659dC7A13c8f12663D251E72B698
                </div>
              </div>
              <div>
                {isEdit ? (
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleSaveProfile}
                  >
                    Save
                  </Button>
                ) : (
                  <EditNoteIcon
                    className="btn-edit"
                    onClick={() => setIsEdit(true)}
                  />
                )}
              </div>
            </div>
            <BioBox>
              {!isEdit ? (
                <p>{bio || "-"}</p>
              ) : (
                <TextField
                  id="filled-multiline-static"
                  multiline
                  rows={4}
                  defaultValue={bio}
                  variant="filled"
                  hiddenLabel
                  onChange={(e) => setBio(e.target.value)}
                  fullWidth
                />
              )}
            </BioBox>
            <LinkBox>
              <li>
                <LinkTitleBox>
                  <LinkTitle>Github</LinkTitle>
                </LinkTitleBox>
                {isEdit ? (
                  <TextField
                    defaultValue={github}
                    variant="filled"
                    hiddenLabel
                    onChange={(e) => setGithub(e.target.value)}
                    fullWidth
                  />
                ) : (
                  <p> {github || "-"}</p>
                )}
              </li>
              <li>
                <LinkTitleBox>
                  <LinkTitle>Twitter</LinkTitle>
                </LinkTitleBox>
                {isEdit ? (
                  <TextField
                    defaultValue={twitter}
                    variant="filled"
                    hiddenLabel
                    onChange={(e) => setTwitter(e.target.value)}
                    fullWidth
                  />
                ) : (
                  <p> {twitter || "-"}</p>
                )}
              </li>
              <li>
                <LinkTitleBox>
                  <LinkTitle>Email</LinkTitle>
                </LinkTitleBox>
                {isEdit ? (
                  <TextField
                    defaultValue={email}
                    variant="filled"
                    hiddenLabel
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                  />
                ) : (
                  <p> {email || "-"}</p>
                )}
              </li>
            </LinkBox>
          </div>
        </div>
      </ProfileBox>
    </PageStyle>
  );
}

const ProfileBox = styled.div`
  width: 100%;
  min-height: 500px;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 16px;
  padding: 40px;
  box-sizing: border-box;
  .inner {
    display: flex;
    gap: 40px;
  }
  .right {
    flex: 1;
  }
  .top {
    display: flex;
    justify-content: space-between;
    .btn-edit {
      cursor: pointer;
    }
    .wallet {
      margin-top: 16px;
    }
  }
`;

const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  overflow: hidden;
  label {
    margin-top: 0;
  }
`;

const UploadBox = styled.label`
  background: #fff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 20px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  .iconRht {
    margin-right: 10px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
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
    background: rgba(0, 0, 0, 0.2);
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

const BioBox = styled.div`
  margin-block: 16px;
`;

const LinkBox = styled.ul`
  margin-top: 20px;
  li {
    margin-top: 16px;
  }
`;

const LinkTitleBox = styled.div`
  margin-bottom: 16px;
`;

const LinkTitle = styled.span`
  display: inline-block;
  padding-inline: 12px;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
`;
