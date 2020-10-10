import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ClassComponents from './ClassComponents';


ReactDOM.render(
  <div style={{ width: 700, display: 'inline', backgroundColor: 'red' }}>
    <ClassComponents />
  </div>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
