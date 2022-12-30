const { default: styled } = require("styled-components")
import { useEffect } from 'react'
import botão_play from '../../public/play_button/play.svg'
import botão_stop from '../../public/play_button/Play_pause.svg'
import Image from 'next/image'
import Background from './BackGround'
import config from "../../Config.json"

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
    width: 100%;
  }
  
  .music__altor {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;  
    margin: 5% 40% 5% 0;
    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .play__button {
    width: 137px;
    height: 137px;
    cursor: pointer;
  }

`
module.exports = function Radio() {

  useEffect(() => {
    const backgroundElement = document.querySelector('.background')
    backgroundElement.style.filter = 'blur(2px)'
  }, [config.musica.image])


  return (
    <Conteiner>

      <span className="music__title">{config.musica.titulo}</span>
      <div className="conteiner__image">
        <img className="image" alt="Capa da musica" src={config.musica.image} />
      </div>
      <span className="music__altor">{config.musica.autor}</span>
      <Image className="play__button" alt="play__button" src={botão_stop} />

      <Background image={config.musica.image} alt="Capa da musica" />

    </Conteiner>
  )
}