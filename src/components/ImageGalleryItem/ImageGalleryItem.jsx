import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  const setModalImageSrc = () => onClick(largeImageURL);

  return (
    <li>
      <img src={webformatURL} onClick={setModalImageSrc} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
