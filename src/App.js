import './App.css';
import Body from './components/Body';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';

import headerImg from "./Resources/headerImg.webp"

const customStyle = {
  backgroundImage: `url(${headerImg})`,
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
};

function App() {
  return (
    <div style={customStyle} className='h-svh '>
      <Header/>
      <Body/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
