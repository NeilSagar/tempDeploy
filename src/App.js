import './App.css';
import Body from './components/Body';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';

import headerImg from "./Resources/headerImg.png"

const customStyle = {
  backgroundImage: `url(${headerImg})`, // Correct way to set background image
  backgroundSize: 'cover', // Optional: Adjust as needed
  backgroundPosition: 'center', // Optional: Adjust as needed
  // Add other styling properties as needed
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
