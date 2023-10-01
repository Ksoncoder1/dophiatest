import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Achievements from './pages/Achievements/Achievements';
import Gallery from './pages/Gallery/Gallery';
import Goalsalign from './pages/Goalsalign/Goalsalign';
import Missing from './pages/Missing/Missing';
import 'animate.css';

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/goals' element={<Goalsalign />} />
          <Route exact path='/achievements' element={<Achievements />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
