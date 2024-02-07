import './App.css';
import Body from './components/Body';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div style={{maxWidth:"2400px"}} className='mx-auto'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<div>
            <Body />
            <FAQ />
            <Footer />
          </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
