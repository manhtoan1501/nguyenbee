import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import IndexThietKe from './Thietke';
import ClassComponents from './ClassComponents';
// import Forms from './ClassComponents/Form/form';

// import FuncComponent from './FuncComponents';
// import Students from './Students';
// import Form from './Form';

const students = [
  { name: 'Nguyen van Cong' },
  { name: 'Nguyen van cuong' },
]

const hshuhong = 'Nguyen thi Nguyet';

ReactDOM.render(
  <div style={{ width: 700, display: 'inline', backgroundColor: 'red' }}>
    <ClassComponents />
  </div>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
