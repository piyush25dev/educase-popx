import { useNavigate } from 'react-router-dom';
import './Landing.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-screen">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}