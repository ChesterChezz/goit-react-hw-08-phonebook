import styled from 'styled-components';

export const Container = styled.div`
  width: 1380px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 400px;
  padding: 12px;
  font-weight: 500;
  background-color: #a9b1b8;
  border: 3px solid #94c8ee;
  border-radius: 8px;
`;
export const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 6px;
  padding: 6px 10px;
  border-radius: 5px;
  font: inherit;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
  color: #425a6b;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 6px 10px;
  margin-top: 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 3px solid #d7e2ea;
  background-color: #d7e2ea;
  color: #425a6b;
  font-size: 20px;

  &:hover,
  &:focus {
    color: black;
    background-color: #f3f3f3;
    cursor: pointer;
  }
`;
