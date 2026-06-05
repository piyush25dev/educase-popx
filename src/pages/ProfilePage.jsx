import { useLocation } from 'react-router-dom';
import './Profile.css';

export default function ProfilePage() {
  const location = useLocation();
  const name  = location.state?.name  || 'Marry Doe';
  const email = location.state?.email || 'Marry@Gmail.Com';

  return (
    <div className="profile-screen">

      <div className="profile-header">
        <span className="profile-header-title">Account Settings</span>
      </div>

      <div className="profile-section">
        <div className="avatar-wrapper">
          <img className="avatar-img" src="https://i.pravatar.cc/150?img=47" alt="Profile" />
          <button className="camera-btn" aria-label="Change photo">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </button>
        </div>
        <div className="profile-info">
          <p className="profile-name">{name}</p>
          <p className="profile-email">{email}</p>
        </div>
      </div>

      <div className="divider" />

      <div className="bio-section">
        <p className="bio-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="divider" />

    </div>
  );
}