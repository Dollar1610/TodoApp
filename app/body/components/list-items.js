import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './list-items.scss';

const ListItems = ({ items, empty=true }) => (
  <div className={'listItems'}>
    {((items.length === 0) || (items[0] === '')) ? 'Список пуст' : <table className={'table is-bordered'}>
      <tbody>
        {
          items.map((item, i) => {
            if (item !== '') return <tr key={i}><td>{item}</td></tr>;
          })
        }
      </tbody>
    </table>}
  </div>
);

export default ListItems;
