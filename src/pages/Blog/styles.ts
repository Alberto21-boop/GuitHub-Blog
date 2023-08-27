import styled from "styled-components";

export const PostsListContainer = styled.section`
  //é aqui que faremos o nosso grid
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(outo-fit, minmax(26rem, 1fr)); */
  // quando eu tiver uma tela maior é so descomentar a linha de cima
  // e depois apagar a de baixo !
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 14rem;
`;
