import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ClassComponents from './ClassComponents';
import FuncComponent from './FuncComponents';
import Students from './Students';
import Form from './Form';

const students = [
  { name: 'Nguyen van Cong' },
  { name: 'Nguyen van cuong' },
]

const hshuhong = 'Nguyen thi Nguyet';

ReactDOM.render(
  <div>
    {/* <Students students={students} hshuhong={hshuhong} /> */}
    <ClassComponents />
    {/* <Form /> */}
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
