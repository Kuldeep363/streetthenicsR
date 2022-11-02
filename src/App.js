import './App.css';
import Header from './components/Header/Header.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.component';
import Home from './pages/Home.page';
import Exercise from './pages/Exercise.page';

// import 

function App() {
  return ( 
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:gender/:exType/:bPart' element={<Exercise/>} />
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
