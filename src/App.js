import { Route } from 'react-router-dom';
import './App.css';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';

import Notfound from './components/Notfound';
import Contactus from './components/Contactus';
import { NavLink} from 'react-router-dom';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/support">Support</NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
  
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<MainHeader></MainHeader>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/contactus" element={<Contactus></Contactus>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
