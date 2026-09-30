import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<PlaceholderPage title="Courses" />} />
        <Route path="/creators" element={<PlaceholderPage title="Creators" />} />
        <Route path="/sign-in" element={<PlaceholderPage title="Sign In" />} />
        <Route path="/join-us" element={<PlaceholderPage title="Join Us" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
