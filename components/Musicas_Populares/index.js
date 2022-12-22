import styled from "styled-components"
import Music__display from "../Music__display"

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #131313;
  color: #fff;
  width: 34%;
  height: 100vh;
  
  .title__text{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    margin: 65px 0 44px 0;
  }
  .Show__more {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #FFFFFF;
    margin-top: 2%;
  }
`


export default function Musicas_Populares() {
  return (
    <Conteiner>
      <h3 className="title__text">Musicas mais votadas</h3>
      <Music__display />
      <Music__display />
      <Music__display />
      <Music__display />
      <Music__display />
      <h3 className="Show__more">Ver mais</h3>
    </Conteiner>  
  )
}