import { lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.component';
import DataLoader from './components/ExtraComponents/DataLoader';
import Home from './pages/Home.page';
const Exercise = lazy(()=> import('./pages/Exercise.page'));
const Weightloss = lazy(()=> import('./pages/Weightloss.page'));
const WeightLossTips = lazy(()=> import('./components/weight-loss/weight-loss-tips'));
const WeightLossDiet = lazy(()=> import('./components/weight-loss/weight-loss-diet'));
const WeightLossExercise = lazy(()=> import('./components/weight-loss/weight-loss-exercise'));
const ScrollToTop = lazy(()=> import('./components/ExtraComponents/ScrollToTop'));
const MuscleGain = lazy(()=> import('./pages/MusleGain'));
const MuscleGainTips = lazy(()=> import('./components/Muscle-gain/Muscle-gain-tips'));
const MuscleGainDiet = lazy(()=> import('./components/Muscle-gain/Muscle-gain-diet'));
const MuscleGainExercise = lazy(()=> import('./components/Muscle-gain/Muscle-gain-exercise'));
const StrengthExercises = lazy(()=> import('./pages/StrengthExercises'));
const ContactPage = lazy(()=> import('./pages/Contact.page'));
const About = lazy(()=> import('./pages/About.page'));
const Calisthenics = lazy(()=> import('./pages/Calisthenics.page'));
const CalisthenicsBeginner = lazy(()=> import('./components/Calisthenics/CalisthenicsBeginner'));
const CalisthenicsIntermediate = lazy(()=> import('./components/Calisthenics/CalisthenicsIntermediate'));
const CalisthenicsAdvance = lazy(()=> import('./components/Calisthenics/CalisthenicsAdvance'));
const FitnesCalculator = lazy(()=> import('./pages/FitnessCalculator'));
const CaloriesCalculator = lazy(()=>import('./components/Fitnesscalculator/CaloriesCalculator'));


function App() {
  return ( 
    <BrowserRouter>
    <Header/>
    <ScrollToTop/>
    <Suspense fallback={<DataLoader/>}>
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
        <Route path='/calisthenics' element={<Calisthenics/>}>
          <Route path='beginner' element={<CalisthenicsBeginner/>} />
          <Route path='intermediate' element={<CalisthenicsIntermediate/>} />
          <Route path='advance' element={<CalisthenicsAdvance/>} />
        </Route>
        <Route path='/strength-exercises' element={<StrengthExercises/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/about-us' element={<About/>} />

        <Route path='/fitness-calculators' element={<FitnesCalculator/>}/>
        <Route path='/fitness-calculators/calories-calculator' element={<CaloriesCalculator/>} />
      </Routes>
    </Suspense>
    <Footer/>

    </BrowserRouter>
  );
}

export default App;
