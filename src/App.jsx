import './App.css';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
