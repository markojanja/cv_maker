const FormProfile = ({ profile, setProfile }) => {
  function handleProfileInput(e) {
    setProfile(e.target.value);
  }

  return (
    <form className="form">
      <h2>Profile</h2>
      <textarea type="text" name="Your profile" onChange={handleProfileInput} placeholder="Profile" required value={profile} rows={5} />
    </form>
  );
};

export default FormProfile;
