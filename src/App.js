import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Students from './components/Students';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact me</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Students">Students</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/Home' element={<Home/>}></Route>
          <Route exact path='/About' element={<About/>}></Route>
          <Route exact path='/Contact' element={<Contact/>}></Route>
          <Route exact path='/Students' element={<Students/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
