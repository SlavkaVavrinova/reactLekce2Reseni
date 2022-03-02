import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Header = () => {
  return (
    <header>
      <h1>Super miniweb</h1>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <h2>Obsah stránky</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        dolorum consequuntur dicta, perferendis tenetur recusandae minima
        necessitatibus incidunt ratione, nam corporis in sequi ea eos velit
        architecto commodi aut ipsum maxime officiis illum optio animi et.
        Obcaecati, accusamus. Dolor, tempora illum quidem, pariatur totam quos
        illo, qui eos harum dolores sint fugiat porro quasi non culpa officia
        voluptas consequuntur quibusdam ratione hic corrupti magnam facilis!
        Quia, at. Vero laudantium corrupti aut nam excepturi animi facere in
        dicta ratione modi repellat perferendis ab, totam necessitatibus
        architecto a, minima repellendus dignissimos cumque impedit explicabo
        mollitia? Quis aperiam delectus error harum veniam eligendi.
      </p>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <p> &copy; Slávka 2022</p>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector('#app'));
