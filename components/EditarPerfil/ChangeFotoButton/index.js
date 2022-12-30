import React, { useState } from 'react';
import styled from 'styled-components';
import config from '../../../Config.json'


const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .photo{
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  .Label__Button {
    padding: 12px 60px;
    width: 100%;
    background: #524178;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    margin-top: 14px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer;
  }
`
function ChangeFotoButton() {
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    
    if (!file.type.startsWith('image/png') && !file.type.startsWith('image/jpeg')) {
      alert('Por favor, selecione uma imagem no formato PNG ou JPEG.');
      return
    }
    setImage(file);
  };

  return (
    <Conteiner>
      {image ? (
        <img className='photo' src={config.perfil.imagem = URL.createObjectURL(image)} alt="Selected image" />
      ) : (
        <img
          className='photo'
          src={config.perfil.imagem}
          alt="Placeholder image"
        />
      )}
      <input id="fileInput" type="file" onChange={handleChange} value="" style={{ display: 'none' }} />
      <label className='Label__Button' htmlFor="fileInput">Trocar foto</label>

    </Conteiner>
  );
}

export default ChangeFotoButton;
