import styled from 'styled-components';

const Button = styled.button`
  width: 306px;
  height: 40px;
  background: #524178;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  margin-top: 14px;
  cursor: pointer;  
`;

const ButtonText = styled.span`
  width: 57px;
  height: 25px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  color: #FFFFFF;
`;

export default function MyButton({children, onClick, type,...props}) {
  return (
    <Button onClick={onClick} type={type}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}
