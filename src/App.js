import './App.scss';
import {Routes, Route} from 'react-router'
import Layout from './componenets/Layout'
import Home from './componenets/Home'
import About from './componenets/About'
import Contact from "./componenets/Contact";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="/rakesh" index element ={<Home/>}/>
      <Route path="About" element ={<About/>}/>
      <Route path="Contact" element ={<Contact/>}/>
      </Route>
    </Routes>
      </>
  );
}

export default App;
