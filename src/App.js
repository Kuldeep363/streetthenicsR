import './App.css';
import Header from './components/Header/Header.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.component';
import Home from './pages/Home.page';
import Exercise from './pages/Exercise.page';
import Weightloss from './pages/Weightloss.page';
import WeightLossTips from './components/weight-loss/weight-loss-tips';
import WeightLossDiet from './components/weight-loss/weight-loss-diet';
import WeightLossExercise from './components/weight-loss/weight-loss-exercise';
import ScrollToTop from './components/ExtraComponents/ScrollToTop';
import MuscleGain from './pages/MusleGain';
import MuscleGainTips from './components/Muscle-gain/Muscle-gain-tips';
import MuscleGainDiet from './components/Muscle-gain/Muscle-gain-diet';
import MuscleGainExercise from './components/Muscle-gain/Muscle-gain-exercise';
import StrengthExercises from './pages/StrengthExercises';
import ContactPage from './pages/Contact.page';
import About from './pages/About.page';

// import 

function App() {
  return ( 
    <BrowserRouter>
    <Header/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/exercise/:gender/:exType/:bPart' element={<Exercise/>} />
      <Route path='/weight-loss' element={<Weightloss/>}>
        <Route path='tips' element={<WeightLossTips/>} />
        <Route path='diet' element={<WeightLossDiet/>} />
        <Route path='exercises' element={<WeightLossExercise/>} />
      </Route>
      <Route path='/muscle-gain' element={<MuscleGain/>}>
        <Route path='tips' element={<MuscleGainTips/>} />
        <Route path='diet' element={<MuscleGainDiet/>} />
        <Route path='exercises' element={<MuscleGainExercise/>} />
      </Route>
      <Route path='/strength-exercises' element={<StrengthExercises/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/about-us' element={<About/>} />
    </Routes>
    <Footer/>

    </BrowserRouter>
  );
}

export default App;
