import styled from "@emotion/styled";
import Card from "@mui/material/Card";

export default function AlbumItem() {
  return (
    <AlbumItemStyled>
      <img
        src="https://www.stylearena.net/wp-content/uploads/2015/04/cute-cat-in-jeans-1024x640.jpg"
        alt=""
      />
      <div className="name">Album name</div>
    </AlbumItemStyled>
  );
}

const AlbumItemStyled = styled.div`
  img {
    width: 100%;
  }
  .name {
    text-align: center;
  }
`;
