import './App.scss';
import {Routes, Route} from 'react-router'
import Layout from './componenets/Layout'
import Home from './componenets/Home'
import About from './componenets/About'
import Contact from "./componenets/Contact";
import Projects from "./componenets/Projects";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="/" index element ={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      <Route path="/projects" element ={<Projects/>}/>
      </Route>
    </Routes>
      </>
  );
}

export default App;
