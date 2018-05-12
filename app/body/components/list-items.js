import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import './list-items.scss';


const ListItems = ({ items }) => (
  <div className={'list-items'}>
    {((items.length === 0) || (items[0] === '')) ? 'Список пуст' : <table className={'table is-bordered'}>
      <tbody>
        {
          items.map((item) => {
            if (item !== '') {
              return (
                <tr key={v4()}>
                  <td>{item}</td>
                </tr>
              );
            }
            return null;
          })
        }
      </tbody>
    </table>}
  </div>
);

ListItems.propTypes = {
  items: PropTypes.array,
};

export default ListItems;
