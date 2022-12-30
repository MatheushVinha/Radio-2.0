const { default: styled } = require("styled-components")
const Conta = require("../components/RegistrationForm")
const Entrar = require("../components/LoginForm")
const Radio = require("../components/Radio")
const EditarPerfil = require("../components/EditarPerfil")
const { default: Musicas_Populares } = require("../components/PopularSongs")
const { default: Perfil } = require("../components/Perfil")
const { useState } = require("react")

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
`

module.exports = function app() {

  const [currentComponent, setCurrentComponent] = useState('B');

  return (
    <DivStyled>
      {currentComponent === 'A' ? <Perfil setCurrentComponent={setCurrentComponent} /> : null}
      {currentComponent === 'B' ? <Conta setCurrentComponent={setCurrentComponent} /> : null}
      {currentComponent === 'C' ? <Entrar setCurrentComponent={setCurrentComponent} /> : null}
      {currentComponent === 'D' ? <EditarPerfil setCurrentComponent={setCurrentComponent} /> : null}

      <Radio />
      <Musicas_Populares />
    </DivStyled>
  )
}
