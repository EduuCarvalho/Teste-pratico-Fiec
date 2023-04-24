import styled from "styled-components";

export default function PerfilPageContent() {
  return (
    <Main>
      <h1>Pagina em construção...</h1>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #f4f6ff;

  h1 {
    color: #1a428a;
    font-weight: 700;
    font-size: 50px;
    font-family: "roboto", sans-serif;
  }
`;
