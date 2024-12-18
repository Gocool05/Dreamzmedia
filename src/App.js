import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import BirthdayEvents from './pages/Events/BirthdayEvents';
import CorporateEvents from './pages/Events/CorporateEvents';
import MarriageEvents from './pages/Events/MarriageEvents';
import SchoolEvents from './pages/Events/SchoolEvents';

function App() {
  return (
 <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/whatwedo' element={<Works/>}/>
  <Route path='/gallery' element={<Gallery/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/birthday-events' element={<BirthdayEvents/>}/>
  <Route path='/corporate-events' element={<CorporateEvents/>}/>
  <Route path='/wedding-events' element={<MarriageEvents/>}/>
  <Route path='/school-events' element={<SchoolEvents/>}/>
  <Route path='*' element={<SchoolEvents/>}/>
</Routes>
 </BrowserRouter>
  );
}

export default App;
