import styled from "styled-components";

const Input = styled.input`
  background-color: #262626;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 302px;
    height: 36px;
    border: none;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;

    &::placeholder {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #FFFFFF;
      text-indent: 12px;
}
`;

export default Input