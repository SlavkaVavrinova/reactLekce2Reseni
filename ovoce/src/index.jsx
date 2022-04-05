import React from 'react';
import { render } from 'react-dom';
import './style.css';

const apples = {
  name: 'Jablíčka',
  image:
    'https://raw.githubusercontent.com/Czechitas-React-podklady/React-lekce-03/main/cviceni-02/jablko.jpg',
  text: 'Výborná jablíčka, lepší na trhu nenajdete. Máme je červená i zelená.',
};

const pears = {
  name: 'Hruštičky',
  image:
    'https://raw.githubusercontent.com/Czechitas-React-podklady/React-lekce-03/main/cviceni-02/hruska.jpg',
  text: 'Někdy se říkám, že hrušky jsou podzimní kolegyně jablek. My říkáme, že jsou to královny podzimu.',
};

const content = (
  <>
    <h1>Stánek s ovocem</h1>
    <div className="fruitstand">
      <div className="fruit">
        <img className="fruit__image" src={apples.image} />
        <h2 className="fruit__name">{apples.name}</h2>
        <p className="fruit__text">{apples.text}</p>
      </div>
      <div className="fruit">
        <img className="fruit__image" src={pears.image} />
        <h2 className="fruit__name">{pears.name}</h2>
        <p className="fruit__text">{pears.text}</p>
      </div>
    </div>
  </>
);

render(content, document.querySelector('#app'));

/* Varianta s komponentou pro pokročilejší

const Content = () => {
  const apples = {
    name: 'Jablíčka',
    image:
      'https://raw.githubusercontent.com/Czechitas-React-podklady/React-lekce-03/main/cviceni-02/jablko.jpg',
    text: 'Výborná jablíčka, lepší na trhu nenajdete. Máme je červená i zelená.',
  };

  const pears = {
    name: 'Hruštičky',
    image:
      'https://raw.githubusercontent.com/Czechitas-React-podklady/React-lekce-03/main/cviceni-02/hruska.jpg',
    text: 'Někdy se říkám, že hrušky jsou podzimní kolegyně jablek. My říkáme, že jsou to královny podzimu.',
  };

  return (
    <>
      <h1>Stánek s ovocem</h1>
      <div className="fruitstand">
        <div className="fruit">
          <img className="fruit__image" src={apples.image} />
          <h2 className="fruit__name">{apples.name}</h2>
          <p className="fruit__text">{apples.text}</p>
        </div>
        <div className="fruit">
          <img className="fruit__image" src={pears.image} />
          <h2 className="fruit__name">{pears.name}</h2>
          <p className="fruit__text">{pears.text}</p>
        </div>
      </div>
    </>
  );
};

render(<Content />, document.querySelector('#app'));

*/
