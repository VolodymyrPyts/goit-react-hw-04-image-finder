import styled from 'styled-components';

export const ButtonStyled = styled.button`
  margin-left: 50%;
  padding: 8px 16px;
  border-radius: 2px;
  background: rgb(0, 20, 191);
  background: linear-gradient(
    0deg,
    rgba(249, 238, 6, 0.8) 40%,
    rgba(0, 20, 191, 0.8) 60%
  );
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #000000;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 24px;
  line-height: 1.2;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: #303f9f;
  }
`;
