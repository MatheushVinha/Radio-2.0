import { useEffect } from "react";
import styled from "styled-components"
import Music__display from "../MusicCard"

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

`

const elements = [<Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />,];


export default function Musicas_Populares() {

  useEffect(() => {
    await fetch('api/populareSongs', {
      
  }, [])

  return (
    <Conteiner>
      <h3 className="title__text">Musicas mais votadas</h3>
      
    </Conteiner>
  )
}