import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomepageDashboard from './pages/HomepageDashboard';
import MenuPage from './pages/MenuPage';
import './App.css';
import AboutPage from './pages/AboutPage';
import LosingControl from './pages/LosingControlPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomepageDashboard/>} />
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/losing-control' element={<LosingControl/>}/>
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
