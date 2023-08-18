import './FormInfo.css';
const FormInfo = ({ personalInfo, handleSubmit, handleChange }) => {
  return (
    <form className="form" onSubmit={() => handleSubmit}>
      <h2>Personal info</h2>

      <input type="text" name="fullname" onChange={handleChange} placeholder="full name" required value={personalInfo.fullname} autoFocus />

      <input type="email" name="email" onChange={handleChange} placeholder="email" required value={personalInfo.email} />

      <input type="text" name="address" onChange={handleChange} placeholder="address" required value={personalInfo.address} />

      <input type="text" name="phone" onChange={handleChange} placeholder="phone number" required value={personalInfo.phone} />
    </form>
  );
};

export default FormInfo;
