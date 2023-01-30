import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import Music__display from '../../MusicCard';
import { Scrollbars } from 'react-custom-scrollbars';
import Loading from "../../Loading";

const FavoriteSongsTitle = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #FFFFFF;
  margin-top: 10%;
`;

const ShowMore = styled.h3`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #FFFFFF;
  margin-bottom: 2%;
`;

const ScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function FavoriteSongs() {
  const [musicas, setMusicas] = useState();
  const [isLoading, setIsLoading] = useState(true);


  async function pegarmusicas() {
    setIsLoading(true);
    const aValue = localStorage.getItem("id");
    await fetch('api/userFavMusic', {
      method: 'POST',
      body: JSON.stringify({
        idUsuario: aValue,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => setMusicas(response))
    setIsLoading(false);
  }


  useEffect(() => {
    pegarmusicas()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <FavoriteSongsTitle>Suas Musicas Favoritas</FavoriteSongsTitle>
        <Scrollbars style={{ width: '100%', height: '100%' }}>
      <ScrollBox >
          {musicas.map(music => (
            <Music__display key={music.id} props={music} />
          ))}
      </ScrollBox>
        </Scrollbars>
    </>
  );
}

export default FavoriteSongs;