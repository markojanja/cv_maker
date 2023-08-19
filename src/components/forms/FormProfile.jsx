import './Forms.css';
const FormProfile = ({ profile, setProfile }) => {
  function handleProfileInput(e) {
    setProfile(e.target.value);
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Profile</h2>
      </div>
      <form className="profile-form">
        <textarea type="text" name="Your profile" onChange={handleProfileInput} placeholder="Profile" required value={profile} rows={5} />
      </form>
    </div>
  );
};

export default FormProfile;
