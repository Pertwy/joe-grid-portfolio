import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ImageDetail from './pages/ImageDetail/ImageDetail';
import About from './pages/About/About';
import Comics from './pages/Comics/Comics';
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
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;