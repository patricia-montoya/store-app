import axios from 'axios';
const PROXY = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '76381272a595d793a97ea22b17cb3ba0f51af9fa';

const massage = (comic) => ({
    id: comic.id,
    name: comic.name,
    date: comic.date_added.slice(0, 4),
    img: comic.image.thumb_url,
    price: (Math.random() * 10).toFixed(2)
});

export const getComics = () => {
    return axios.get(`${PROXY}https://comicvine.gamespot.com/api/volumes/?api_key=${API_KEY}&format=json&limit=20&sort=name:asc&filter=name:%Spiderman%`)
    .then((response) => {
        const comics = response.data.results.map((comic) => massage(comic))
        console.log(comics)
        return comics
    })
};