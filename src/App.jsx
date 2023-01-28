import React from 'react';
import Navbar from './components/UI/Navbar';
import Article from './components/UI/Article';
import data from './components/data/data'

import './App.css'

function App() {

  const articles = data.map((item, id) =>
  {
      return <Article item={item} key={id}/> 
  })

  return (
    <div className="App">
      <Navbar title="my travel journal."/>
      <div className='articles'>
        {articles}
      </div>
    </div>
  )
}

export default App
