const { default: styled } = require("styled-components")
const Conta = require("../components/Conta")
const Entrar = require("../components/Entrar")
const { default: Musicas_Populares } = require("../components/Musicas_Populares")
const Radio = require("../components/Radio")

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
`

module.exports = function app() {
  return (
    <DivStyled>
      <Entrar />
      <Radio />
      <Musicas_Populares />
    </DivStyled>
  )
}