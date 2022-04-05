import React from 'react';
import { render } from 'react-dom';
import './style.css';

const jmeno = 'Czechitka obecná';
const omne = 'Mám ráda React';

const content = (
  <div className="container">
    <header>
      <h1>{jmeno}</h1>
    </header>
    <main>
      <p className="description">{omne}</p>
    </main>
  </div>
);

render(content, document.querySelector('#app'));

/* Varianta s komponentou pro pokročilejší

const Content = () => {
  const jmeno = 'Czechitka obecná';
  const omne = 'Mám ráda React';

  return (
    <div className="container">
      <header>
        <h1>{jmeno}</h1>
      </header>
      <main>
        <p className="description">{omne}</p>
      </main>
    </div>
  );
};

const App = () => <Content />;

render(<App />, document.querySelector('#app'));

*/
