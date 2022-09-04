import styled from 'styled-components';

export const SearchbarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: rgb(0, 20, 191);
  background: linear-gradient(
    0deg,
    rgba(249, 238, 6, 1) 40%,
    rgba(0, 20, 191, 1) 60%
  );
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 64px;
  height: 64px;
  border: 0;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
    color: #3f51b5;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 32px;
  border: none;
  outline: none;
  padding-left: 16px;
  padding-right: 4px;
  :placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
