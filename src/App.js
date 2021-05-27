import React from "react"
import Painting from "./components/Painting"
import paintings from "./paintings.json"

console.log(paintings);


const painting = {
  id: "id-1",
  url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  title: "Feathers. Art abstract vivalaviva",
  price: 500,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 5,
};

const painting2 = {
  id: "id-2",
  url: "https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg",
  title: "Bird. Animal art abstract",
  price: 6444,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 15,
};


const App = () => {
    return (
      <div>
        <h1>First Component</h1>
        <Painting
          url={paintings[0].url}
          title={paintings[0].title}
          a={5}
          b={10}
          price={paintings[0].price}
          profileUrl={paintings[0].author.url}
          tag={paintings[0].author.tag}
          quantity={paintings[0].quantity}
        />
        <Painting
          url="https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg"
          alt="Feathers. Art abstract vivalaviva"
          price={400}
          title="Bird. Animal art abstract"
          profileUrl="https://pixabay.com/users/ractapopulous-24766/"
          tag="ractapopulos"
          quantity={paintings[2].quantity}
        />
      </div>
    );
}

export default App;