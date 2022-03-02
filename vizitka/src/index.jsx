import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Content = () => {
  const jmeno = 'Slávka Vavřinová';
  const omne = 'Mám ráda víno.';

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
