import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import React from 'react';
import TrendingSection from './components/TrendingSection/TrendingSection';



function App() {
  return (
<div className="App">
      
      <Sidebar />
      
      {/*COLOQUEI O CONTEÚDO PRINCIPAL AQUI*/}
      <div className='main-content'></div>
      <TrendingSection />
    </div>
  );
}

export default App;
