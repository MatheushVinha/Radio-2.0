import Music__display from "../Music__display";
const { default: styled } = require("styled-components");
const confg = require('../../Config.json')
import image_config from '../../public/Engrenagem.png'
import Image from "next/image";
import FavoriteSongs from "./Favorit-song";


const SectionConta = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100vh;
  padding: 0;
  font-family: Lato;
  background-color: #131313;
  color: #FFFFFF;
  position: relative;

  .section-container {
    width: 130px;
    height: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 5%;
  }

  .profile-image {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-bottom: 18px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .profile-name{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 10px;
    color: #ECECEC;
  }

  .profile-job{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #AAA0A0;
    

  }
  .favorite-songs-section {
    width: 100%;
    height: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } 

  .favorite-songs-title{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    color: #FFFFFF;
    margin-top: 10%;
  }
  .Show__more {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #FFFFFF;
  margin-bottom: 2%;
}
  .configure-button {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2%;
    right: 5%;
    cursor: pointer;
  }

`;

export default function Perfil({setCurrentComponent}) {

  return (
    <SectionConta>
      <Image className='configure-button' src={image_config} onClick={() => setCurrentComponent('D')}/>
      <section className='section-container'>
        <img src={confg.perfil.imagem} className='profile-image'></img>
        <span className='profile-name'>{confg.perfil.nome}</span>
        <span className='profile-job'>{confg.perfil.job}</span>
      </section>
      <FavoriteSongs />
    </SectionConta>
  )
}


