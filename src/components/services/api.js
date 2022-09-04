import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const GetImages = async (search, page) => {
  const params = new URLSearchParams({
    key: '28351441-36643387bd1a8158570da0675',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 12,
  });

  try {
    const {
      data: { hits, totalHits },
    } = await axios.get(`?${params}`);

    const imagesData = hits.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    }));
    return { imagesData, totalHits };
  } catch (err) {
    console.log(err);
  }
};
