import styled from 'styled-components';
import Image from 'next/image'
import logo from '../../public/google_logo.png'

const Button = styled.button`
  width: 152px;
  height: 30px;
  background: #CB1919;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  margin-top: 14px;
  background-image:'../../public/google_logo.png' ;
  position: relative;

  .Img {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 3%;
    top: 16%;
  }
`;

const ButtonText = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  position: relative;
  left: 7%;
`;

export default function GoogleButton({ children, ...props }) {
  return (
    <>
      <Button>
        <ButtonText>{children}</ButtonText>
        <Image className='Img' src={logo} />
      </Button>
    </>
  );
}
