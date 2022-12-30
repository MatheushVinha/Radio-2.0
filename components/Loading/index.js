const { default: styled } = require("styled-components");
import LoadingGif from '../../public/Loading.gif'
import Image from 'next/image'

const SectionConta = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100vh;
  padding: 0;
  font-family: Lato;
  background-color: #131313;
  color: #FFFFFF;
  position: relative;

  .gifLoding {
    width: 50px;
    height: 50px;
  }

`;


export default function Loading() {

  return (
    <SectionConta>
      <Image className='gifLoding' src={LoadingGif} alt="Um gif legal" />
    </SectionConta>
  )
}


