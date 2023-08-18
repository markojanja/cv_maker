const FormProfile = ({ handleChange, handleSubmit, profileText }) => {
  return (
    <form className="form" onSubmit={() => handleSubmit}>
      <h2>Profile</h2>
      <textarea type="text" name="Your profile" onChange={handleChange} placeholder="Profile" required value={profileText} rows={5} />
    </form>
  );
};

export default FormProfile;
