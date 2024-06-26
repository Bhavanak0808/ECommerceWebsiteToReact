import logo from './logo.svg';
import './App.css';
import './components/Style.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{backgroundColor:"rgb(102, 187, 195)"}}>
     <Navbar/>
     <Header/>
     <Carousel/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
