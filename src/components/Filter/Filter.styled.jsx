import styled from '@emotion/styled';

export const FilterInput = styled.input`
  display: block;
  width: 300px;
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
`;

export const FilterLabel = styled.label`
  font-weight: 700;
  color: rgb(255, 255, 255);
`;
