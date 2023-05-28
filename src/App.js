import './App.css';
import Header from './Header';
import Carousel from './Components/Carousel';
import QuienesSomos from './Components/QuienesSomos';
import Footer from './Footer';

function App() {
  const images = [
    require('./imgs/contaminacion-1.jpg'),
    require('./imgs/contaminacion-2.jpg'),
    require('./imgs/contaminacion-3.jpg'),
    require('./imgs/contaminacion-4.jpg')
  ];

  return (
    <div className="App">
      <Header />
      <Carousel images={images} />
      <QuienesSomos />
      <Footer />
    </div>
  );
}

export default App;
