import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './component/featurs/header/Header.component';
import Footer from './component/featurs/footer/Footer.component';
import Routing from './Router.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routing/>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
