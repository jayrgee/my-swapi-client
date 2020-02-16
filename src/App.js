import React from 'react';

import './styles.css';
import Person from './components/Person';
import Person2 from './components/Thing'
export default function App() {
  return (
    <div className="App">
      <Person id="1" />
      <Person2 query="people/2" />
    </div>
  );
}
