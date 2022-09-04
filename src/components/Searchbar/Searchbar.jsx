import PropTypes from 'prop-types';
import { IoIosImages } from 'react-icons/io';
import {
  SearchbarStyled,
  SearchButton,
  SearchForm,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const setQuery = e => {
    e.preventDefault();
    onSubmit(e.target.elements.searchInput.value.trim());
  };

  return (
    <SearchbarStyled>
      <SearchForm onSubmit={setQuery}>
        <SearchButton type="submit">
          <IoIosImages size={36} />
        </SearchButton>

        <SearchInput
          name="searchInput"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
