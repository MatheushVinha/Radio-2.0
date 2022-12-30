const { default: styled } = require("styled-components");
import MyButton from "../Button"
import GoogleButton from "../GoogleButton";
import FacebookButton from "../FacebookButton";
import Input from "../Input";
import { useState } from "react";

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

module.exports = function Conta({ setCurrentComponent }) {
  const [nome, setNome] = useState(null)
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)


  const handleClick = async (event) => {
    event.preventDefault();

    

    await fetch('/api/createUser', {
      method: 'POST',
      body:   JSON.stringify({
        name: nome,
        email: email,
        senha: senha,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => console.log(response))

  };

  return (
    <SectionConta>
      <h1 className="title__perfil">Crie sua conta</h1>
      <form onSubmit={handleClick} >
        <div className="div_input">
          <Input
            type={"text"}
            id="name"
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="div_input">
          <Input
            type={"email"}
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="div_input">
          <Input
            type={"password"}
            id="senha"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}

          />
        </div>
        <MyButton type={"submit"} onClick={() => { /* ,setCurrentComponent("A") */ }}>registrar</MyButton>
      </form>

      <div className="Logins__button">
        <GoogleButton>Login com o google</GoogleButton>
        <FacebookButton>Login com o facebook</FacebookButton>
      </div>

      <span className="Text__ou">ou</span>

      <MyButton onClick={() => setCurrentComponent("C")}>Entrar</MyButton>
    </SectionConta>
  )
}

