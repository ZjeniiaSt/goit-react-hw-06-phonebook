import styled from '@emotion/styled';

export const ContactsRoster = styled.ul`
  color: #c5c5c5;
  max-width: 400px;
`;

export const ContactsData = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-weight: 700;
  align-items: center;
`;

export const ContactNumber = styled.span`
  padding-left: 20px;
  color: #848482;
`;

export const ContactDelete = styled.button`
  color: rgb(52, 56, 61);
  border-radius: 28px;
  border: 6px solid rgb(52, 56, 61);
  cursor: pointer;
  color: #000;
  background: rgb(28, 30, 33);
  padding: 7px 20px 7px 20px;

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
  }
`;
