import React from 'react';
import './App.css';
import NewsList from './components/newsList/newsList';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <NewsList/>
      </div>
      <div>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
