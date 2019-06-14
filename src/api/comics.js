import axios from 'axios';
const API_KEY = '76381272a595d793a97ea22b17cb3ba0f51af9fa';

const massage = (comic) => ({
    id: comic.id,
    name: comic.name,
    date: comic.start_year,
    img: comic.image.medium_url,
    publisher: comic.publisher.name,
    price: (Math.random() * 10).toFixed(2)
});

export const getComics = () => {
    return axios.get(`https://comicvine.gamespot.com/api/volumes/?api_key=${API_KEY}&format=json&limit=25&sort=name:asc&filter=name:%Flash%`)
    .then((response) => response.data.results.map((comic) => massage(comic)))
};

export const getFilteredComics = (comicFilter) => {
    return axios.get(`https://comicvine.gamespot.com/api/search/?api_key=${API_KEY}&format=json&limit=20&query=${comicFilter}&resource_type=volume`)
    .then((response) => response.data.results.map((comic) => massage(comic)))
}
