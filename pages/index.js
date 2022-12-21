const { default: styled } = require("styled-components")
const Conta = require("../components/Conta")
const Entrar = require("../components/Entrar")

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
`

module.exports = function app() {
  return (
    <DivStyled>
      <Conta />
      <Entrar />
    </DivStyled>
  )
}