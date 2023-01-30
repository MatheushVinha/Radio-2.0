const { default: styled } = require("styled-components")
import { createRef, useEffect, useState } from 'react'
import Background from './BackGround'
import PlayPauseButton from './PlayPauseButton'
import Loading from '../Loading'
import { createContext } from 'vm'

const Conteiner = styled.div`
  width: 33%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .music__title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 74px;
    margin-bottom: 7%;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .conteiner__image {
    width: 57%;
    
  }
  .image {
    width: 100% ;
    height: 100% ;
  }
  
  .music__altor {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;  
    margin: 5% 0% 5% 0;
    color: #FFFFFF;
    width: 100%;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .play__button {
    width: 137px;
    height: 137px;
    cursor: pointer;
  }

  .autor-image__conteiner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    
  }

  .Heart {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }

`
module.exports = function Radio() {
  const referencia = createRef()
  const [isLoading, setIsLoading] = useState(true);
  const [musicData, setMusicData] = useState()
  const MyContext = createContext();


  async function fetchData() {
    setIsLoading(true);
    await fetch('api/getMusic')
      .then(res => res.json()).then(data => setMusicData(data))
    setIsLoading(false);
  }

  function endedMusic() {
    setIsLoading(true);
    fetchData()
    setIsLoading(false);
    
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  async function ClickFunction() {
    const aValue = localStorage.getItem("id");
    if (!aValue) {
      //TODO: Tenho que mudar isso em 
      alert("Voce não ta logado")
    }
    await fetch('api/favMusic', {
      method: 'POST',
      body: JSON.stringify({
        userId: aValue,
        currentMusic: musicData.id
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  }

  return (
    <Conteiner>
      <span className="music__title">{musicData.nome}</span>
      <div className="conteiner__image">
        <img className="image" alt="Capa da musica" src={musicData.image} />
      </div>
      <div className='autor-image__conteiner'>
        <span className="music__altor">{musicData.autor}</span>
        <img src={'/coração.png'} className='Heart' onClick={() => ClickFunction()} ></img>
      </div>
      <audio autoPlay src={musicData.music} onEnded={() => { endedMusic() }} ref={referencia} />
      <PlayPauseButton referencia={referencia} />
      <Background image={musicData.image} alt="Capa da musica" />
    </Conteiner>
  )
}