import React from 'react';
import './styles.css';

import useSomething from './hooks/useSomething';

export default function App() {
  const { data, loading, error } = useSomething('1');
  console.log(data);
  return (
    <div className="App">
      {!loading && !error && <h1>{`Hello ${data.name}`}</h1>}
    </div>
  );
}
