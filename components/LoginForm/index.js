const { default: styled } = require("styled-components");
import MyButton from "../Button"
import GoogleButton from "../GoogleButton";
import FacebookButton from "../FacebookButton";
import Input from "../Input";

const SectionConta = styled.section`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100vh;
  padding: 0;
  font-family: Lato;
  background-color: #131313;
  color: #FFFFFF;
  justify-content: center;
  align-items: center;

  .title__perfil {
    font-size: 45px;
    font-weight: 400;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 42px;
  }

  .div_input {
    margin-top: 12px;
  }

  .Logins__button {
    display: flex;
    gap: 1%;
  }
  
  .Text__ou {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin: 27px 0 19px 0;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

module.exports = function Entrar({setCurrentComponent}) {

  const handleClick = (event) => {
    event.preventDefault();
    // outro código aqui
  };

  return (
    <SectionConta>
      <h1 className="title__perfil">Entrar</h1>
      <form >
        <div className="div_input">
          <Input id="email" placeholder="Email" />
        </div>
        <div className="div_input">
          <Input id="senha" placeholder="Senha" />
        </div>
        <MyButton onClick={() => {handleClick, setCurrentComponent("A") }}>Entrar</MyButton>
      </form>

      <div className="Logins__button">
        <GoogleButton>Login com o google</GoogleButton>
        <FacebookButton>Login com o facebook</FacebookButton>
      </div>

      <span className="Text__ou">ou</span>

      <MyButton onClick={() => setCurrentComponent("B")}>Registrar</MyButton>
    </SectionConta>
  )
}

