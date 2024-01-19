import './App.css';
import Body from './components/Body';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='bg-gray-200'>
      <Header/>
      <Body/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
