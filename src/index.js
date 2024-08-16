// This file is the "Entry Point." It's where the React app is initialized and where the root component is rendered into the DOM

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import your CSS here
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
