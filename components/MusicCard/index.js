import Image from "next/image";
import styled from "styled-components";
import coração from "../../public/coração.png"

const Conteiner = styled.div`
  background-color: red;
  width: 374px;
  height: 69px;

  background: #262626;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  

  margin: 15px 0 0 0;

  .music__image {
    width: 18%;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }

  .music__name{
    margin-top: 7px;
    font-family: 'Lato';
    font-style: normal; 
    font-weight: 400; 
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
    text-align: center;
  }
  .music__autor{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #9A9A9A; 
    margin-top: 1px;
    text-align: center;
  }

  .heart__image{
    width: 30px;
    height: 30px;
    margin: auto 0;
    cursor: pointer;
  }
`

export default function Music__display({props}) {
  return (

    <Conteiner>
      <img className="music__image" alt="music card image" src={props.image} />
      <div className="text__conteiner">
        <p className="music__name" >{props.nome}</p>
        <p className="music__autor" >Autor: {props.autor}</p>
      </div>
      <Image alt="Heart image" className="heart__image" src={coração} />
    </Conteiner>

  )

}