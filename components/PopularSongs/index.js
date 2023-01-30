import { useEffect, useState } from "react";
import styled from "styled-components"
import Music__display from "../MusicCard"
import Loading from '../Loading'

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

export default function Musicas_Populares() {
  const [musicas, setMusicas] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function pegarmusicas() {
    setIsLoading(true);
    await fetch('api/populareSongs')
      .then(response => response.json())
      .then(response => setMusicas(response))
    setIsLoading(false);
  }

  useEffect(() => {
    pegarmusicas()
  }, [])


  if (isLoading) {
    return <Loading />
  }
  // console.log(musicas)

  return (
    <Conteiner>
      <h3 className="title__text">Musicas mais votadas</h3>
      {musicas.map(music => (
        <Music__display key={music.id} props={music} />
      ))}

    </Conteiner>
  )
}