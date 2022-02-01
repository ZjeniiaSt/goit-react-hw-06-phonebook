import styled from '@emotion/styled';

export const Form = styled.form`
  width: 300px;
  border-radius: 8px;
  margin: 20px;
`;

export const FormInput = styled.input`
  display: block;
  width: 280px;
  height: 40px;
  border: 0;
  outline: 0;
  padding: 0 0 0 20px;
  font-weight: 700;
  background: rgb(28, 30, 33);
  box-shadow: inset -100px -100px 0 rgb(28, 30, 33);
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
  margin-top: 4px;
  border-radius: 8px;
  &:-webkit-autofill {
    -webkit-box-shadow: inset -100px -100px 0 rgb(28, 30, 33);
    -webkit-text-fill-color: rgb(255, 255, 255);
    -webkit-background: rgb(28, 30, 33);
  }
`;

export const FormLabel = styled.label`
  font-weight: 700;
  color: rgb(255, 255, 255);
`;

export const AddButton = styled.button`
  display: block;
  color: rgb(52, 56, 61);
  border-radius: 28px;
  outline: 0;
  border: 6px solid rgb(52, 56, 61);
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  color: #000;
  background: rgb(28, 30, 33);
  padding: 7px 20px 7px 20px;
  margin-bottom: 60px;

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    text-transform: uppercase;
  }
`;
