import React from 'react';
import 'bulma/bulma.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';

import Header from './header/header';
import Footer from './footer/footer';
import Body from './body/body';

const Todo = () => (
  <section className="section">
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  </section>
 );

export default Todo;
