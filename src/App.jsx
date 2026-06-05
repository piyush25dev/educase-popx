import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage         from './pages/LandingPage';
import LoginPage           from './pages/LoginPage';
import SignUpPage        from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="mobile-shell">
        <Routes>
          <Route path="/"                element={<LandingPage />} />
          <Route path="/login"           element={<LoginPage />} />
          <Route path="/signup"        element={<SignUpPage />} />
          <Route path="/profile"         element={<ProfilePage />} />
          <Route path="*"                element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
