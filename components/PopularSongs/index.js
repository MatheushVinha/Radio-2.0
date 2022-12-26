import styled from "styled-components"
import Music__display from "../MusicCard"
import { Scrollbars } from 'react-custom-scrollbars';
import { useMemo, useState } from "react";


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
const FavoriteSongsSection = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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


const elements = [<Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />, <Music__display />,];


export default function Musicas_Populares() {
  const [numElements, setNumElements] = useState(5);

  const displayedElements = useMemo(() => elements.slice(0, numElements), [numElements]);
  return (
    <Conteiner>
      <h3 className="title__text">Musicas mais votadas</h3>
      <>
        <Scrollbars style={{ width: '100%', height: '100%' }}>
          <FavoriteSongsSection>
            {displayedElements.map((element) => (
              <div>{element}</div>
            ))}

          </FavoriteSongsSection>
        </Scrollbars>
      </>
      {numElements < elements.length && (
        <ShowMore onClick={() => setNumElements(elements.length)}>
          Ver mais
        </ShowMore>
      )}
      {
        numElements === elements.length && (
          <ShowMore onClick={() => setNumElements(5)}>Ver menos</ShowMore>
        )}
    </Conteiner>
  )
}