import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ImageDetail from './pages/ImageDetail/ImageDetail';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Home from './pages/Home/Home';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
              <Home/>
          } />
          <Route path="/image/:id" element={<ImageDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/comics" element={<Navigate to="/projects" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;