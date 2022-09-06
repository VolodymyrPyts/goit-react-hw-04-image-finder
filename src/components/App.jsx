import { useState, useEffect } from 'react';

import { GetImages } from './services/api';
import { animateScroll as scroll } from 'react-scroll';
import { Box } from './theme/Box';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { BadRequest } from './BadRequest/BadRequest';
import { ModalWindow } from './Modal/Modal';

import { Wrapper } from './App.styled';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [modalImageSrc, setModalImageSrc] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotLastPage, setIsNotLastPage] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!query) return;
    (async () => {
      setIsLoading(true);
      const { imagesData, totalHits, lastPage } = await GetImages(query, page);

      if (totalHits) {
        setImages(prevState => [...prevState, ...imagesData]);
      }

      setIsNotLastPage(!lastPage);
      setIsLoading(false);
      setIsEmpty(!totalHits);

      if (page !== 1) scroll.scrollToBottom();
    })();
  }, [page, query]);

  const searchQueryHandler = query => {
    if (query) {
      setImages([]);
      setPage(1);
      setQuery(query);
    }
  };

  const loadMoreHandler = () => {
    setPage(prevState => prevState + 1);
  };

  const openModalHandler = largeImageURL => {
    setModalImageSrc(largeImageURL);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Wrapper>
      <Searchbar onSubmit={searchQueryHandler} />
      <Box display="block" ml="auto">
        {images.length > 0 && (
          <ImageGallery images={images} onClick={openModalHandler} />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          isNotLastPage && <Button onClick={loadMoreHandler}>Load more</Button>
        )}

        {isEmpty && (
          <BadRequest>
            Sorry, there are no images matching your search query. Please try
            again.
          </BadRequest>
        )}
        {showModal && (
          <ModalWindow
            modalImageSrc={modalImageSrc}
            onClickOverlay={closeModalHandler}
          />
        )}
      </Box>
    </Wrapper>
  );
};
