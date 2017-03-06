import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './css/style.css';
import React from 'react';
import {render} from 'react-dom';
import {Comp1} from './components/Comp1.js';

//Container component
class App extends React.Component {
  render () {
    return (
    	<div>
    		<Comp1 />
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));