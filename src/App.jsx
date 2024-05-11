import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;
