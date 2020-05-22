import React from 'react';
import './App.css';
import Title from '../Title';
import Dictionary from '../Dictionary';
import Tabs from '../Tabs';
import Form from '../Form/index';

function App() {
  return (
    <div className='App'>
      <Title />
      <div className='tabWrapper'>
        <Tabs />
        <Dictionary />
        <Form />
      </div>
    </div>
  );
}

export default App;
