import styled from "@emotion/styled";
import Card from "@mui/material/Card";

export default function AlbumItem() {
  return (
    <AlbumItemStyled raised>
      <img
        src="https://www.stylearena.net/wp-content/uploads/2015/04/cute-cat-in-jeans-1024x640.jpg"
        alt=""
      />
    </AlbumItemStyled>
  );
}

const AlbumItemStyled = styled(Card)`
  img {
    width: 100%;
  }
`;
