import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';
import 'bulma/bulma.sass';

import Header from './header/header';
import Footer from './footer/footer';
import Body from './body/center';

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
