import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RouterExample from './Router';
import CrudApp from "./CRUD";


ReactDOM.render(<div>
    <div align='center'> <App /> </div>
    <div align='bottom'> <RouterExample/> </div>
    <div align='bottom'> <CrudApp/> </div>


</div>, document.getElementById('root'));

