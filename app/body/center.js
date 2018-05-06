import React, { Component } from 'react';

import 'bulma/bulma.sass';
import './center.scss';


import Buttons from './components/button';
import InputText from './components/input-text';
import ListItems from './components/list-items';


class Body extends Component {
  constructor(props) {
    super(props);
    localStorage.getItem('items') === null ? this.state = {
      items: [],
      empty: true,
    } : this.state = {
      items: localStorage.getItem('items').split(','),
      empty: false,
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem() {
    const items = [document.getElementById('inputText').value, ...this.state.items];
    console.log(items);
    localStorage.setItem('items', items);
    console.log(localStorage.getItem('items'));
    this.setState({ items, empty: false });
  }

  deleteItem() {
    let { items } = this.state;
    console.log(items);
    items.splice(items.length - 2, 1);
    /* if (items.length === 0) {
      items = [];
      localStorage.removeItem('items');
      this.setState({ items });
      return null;
    } */
    localStorage.setItem('items', items);
    this.setState({ items });
  }
  render() {
    const { addItem, deleteItem } = this;
    const { empty } = this.state;
    const { items } = this.state;
    console.log(empty);
    console.log(items);
    return (
      <nav className="level is-mobile">
        <div className="level-item has-text-centered">
          <div className="application field">
            <InputText id={'inputText'} />
            <ListItems empty={empty} items={items} />
            <Buttons event={addItem} buttonName={'Add'} />
            <Buttons event={deleteItem} buttonName={'Remove'} />
          </div>
        </div>
      </nav>
    );
  }
}


export default Body;
