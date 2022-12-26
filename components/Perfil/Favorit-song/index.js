import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Music__display from '../../MusicCard';
import { Scrollbars } from 'react-custom-scrollbars';

const elements = [<Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />,];

const FavoriteSongsSection = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
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

function FavoriteSongs() {
  const [numElements, setNumElements] = useState(3);

  const displayedElements = useMemo(() => elements.slice(0, numElements), [numElements]);

  return (
    <>
      <FavoriteSongsTitle>Suas Musicas Favoritas</FavoriteSongsTitle>
      
      <Scrollbars style={{ width: '100%', height: '100%' }}>
        <FavoriteSongsSection>
          {displayedElements.map((element) => (
            <div>{element}</div>
          ))}

        </FavoriteSongsSection>
      </Scrollbars>
      {numElements < elements.length && (
        <ShowMore onClick={() => setNumElements(elements.length)}>
          Ver mais
        </ShowMore>
      )}
      {
        numElements === elements.length && (
          <ShowMore onClick={() => setNumElements(3)}>Ver menos</ShowMore>
        )}
    </>
  );
}

export default FavoriteSongs;