
import { Route, Routes } from 'react-router-dom';
 import './App.css';
import Header from './components/Header';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer/>
      
         </div>
  );
}

export default App;
