import PropTypes from 'prop-types';
import { IoLogoSnapchat } from 'react-icons/io';
import { WrapperBadRequest } from './BadRequest.styled';

export const BadRequest = ({ children }) => {
  return (
    <WrapperBadRequest>
      <p>{children}</p>
      <IoLogoSnapchat size={120} />
      <p>Make a valid request</p>
    </WrapperBadRequest>
  );
};

BadRequest.propTypes = {
  children: PropTypes.string,
};
