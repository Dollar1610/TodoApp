/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

import './body.scss';


import Buttons from './components/button';
import InputText from './components/input-text';
import ListItems from './components/list-items';


class Body extends Component {
  constructor() {
    super();
    this.state = {
      items: localStorage.getItem('items') ? localStorage.getItem('items').split(',') : [],
      inputClass: 'application_input input',
      error: false,
    };
    this.inputRef = (element) => { this.textInput = element; };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem() {
    const value = this.textInput.value ? this.textInput.value : '';
    console.log(this.textInput.value);
    if (value === '') {
      this.setState({ inputClass: 'application_input input is-danger', error: true });
      return null;
    }
    const items = [this.textInput.value, ...this.state.items];
    localStorage.setItem('items', items);
    this.textInput.value = '';
    this.setState({ items, inputClass: 'application_input input', error: false });
    return null;
  }
  deleteItem() {
    const { items } = this.state;
    items.splice(items.length - 1, 1);
    localStorage.setItem('items', items);
    this.setState({ items, inputClass: 'application_input input', error: false });
  }
  render() {
    const {
      addItem,
      deleteItem,
    } = this;
    const {
      items,
      inputClass,
      error,
    } = this.state;
    return (
      <nav className="level is-mobile">
        <div className="level-item has-text-centered">
          <div className="application field">
            <InputText inputRef={this.inputRef} error={error} inputClass={inputClass} id={'inputText'} />
            <ListItems items={items} />
            <Buttons event={addItem} buttonName={'Add'} />
            <Buttons event={deleteItem} buttonName={'Remove'} />
          </div>
        </div>
      </nav>
    );
  }
}


export default Body;
