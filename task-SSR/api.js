import axios from 'axios';

export async function getMovies(data = {}) {
  return axios({
    method: 'GET',
    url: 'http://localhost:4000/movies',
    params: {
      limit: data.limit || '12',
      filter: (data.filterActiveKey === 'All') ? '' : data.filterActiveKey,
      sortBy: data.sortActiveKey || 'release_date',
      sortOrder: data.sortOrder || '',
      search: data.search || '',
      searchBy: data.searchBy || 'title',
    },
  });
}

export async function getMovieById(id) {
  return axios({
    method: 'GET',
    url: `http://localhost:4000/movies/${id}`,
    params: { id },
  });
}
