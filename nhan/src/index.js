import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ClassComponents from './ClassComponents';
import FuncComponent from './FuncComponents';
import Students from './Students';

const students = [
  { name: 'Nguyen van Cong' },
  { name: 'Nguyen van cuong' },
]

const hshuhong = 'Nguyen thi Nguyet';

ReactDOM.render(
  <div>
    {/* <Students students={students} hshuhong={hshuhong} /> */}
    <ClassComponents />

  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
