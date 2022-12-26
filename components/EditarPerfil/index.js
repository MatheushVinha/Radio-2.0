const { default: styled } = require("styled-components");
import MyButton from "../Button"
import Input from "../Input";
import ChangeFotoButton from "./ChangeFotoButton";

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
  text-align: center;

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

  .photo-container {
    display: flex;
    gap: 21px;
    margin-bottom: 10%;
  }

  .profile-photo{
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  .change-photo-button{
    width: 179px;
    height: 39px;
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

  .logout-text{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #979191;
    margin-top: 14%;
    border: none;
    background: none;
    cursor: pointer;
  }

  
`;

module.exports = function EditarPerfil({setCurrentComponent}) {

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <SectionConta>
      <h1 className="title__perfil">Editar Perfil</h1>
      <form >
        <div className='photo-container'>
          <ChangeFotoButton className='change-photo-button' ></ChangeFotoButton>
        </div>

        <div className="div_input">
          <Input id="name" placeholder="Nome" />
        </div>
        <div className="div_input">
          <Input id="email" placeholder="Email" />
        </div>
        <div className="div_input">
          <Input id="senha" placeholder="Senha" />
        </div>
        <MyButton onClick={() => {handleSubmit,setCurrentComponent("A")}}>Salvar</MyButton>
        <div>

        <button className="logout-text" onClick={() => setCurrentComponent('B')}>Sair da conta</button>
        </div>
      </form>
    </SectionConta>
  )
}

