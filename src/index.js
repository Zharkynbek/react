import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const painting = {
  id: "id-1",
  url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  title: "Feathers. Art abstract vivalaviva",
  price: 500,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 10,
};

const painting2 = {
  id: "id-2",
  url: "https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg",
  title: "Bird. Animal art abstract",
  price: 400,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 15,
};

const template = (
  <div>
    <img src={painting.url} alt={painting.title} width="480" />
    <h2>{painting.title}</h2>
    <p>
      Author: <a href={painting.author.url}>{painting.author.tag}</a>
    </p>
    <p>Price: {painting.price} Euro</p>
    <button type="button">add korb</button>
  </div>
);