const loader = document.querySelector('.loader');

function searchImageByQueryy(query) {
  const URL = 'https://pixabay.com/api/';

  const API_KEY = '45322930-bdaa0e26907d60cc8a145e4be';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { searchImageByQueryy };
