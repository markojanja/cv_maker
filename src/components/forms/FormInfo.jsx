import './FormInfo.css';
const FormInfo = ({ personalInfo, setPersonalInfo }) => {
  function handlePersonalInfoChange(e) {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  }
  return (
    <form className="form">
      <h2>Personal info</h2>

      <input type="text" name="fullname" onChange={handlePersonalInfoChange} placeholder="full name" required value={personalInfo.fullname} autoFocus />

      <input type="email" name="email" onChange={handlePersonalInfoChange} placeholder="email" required value={personalInfo.email} />

      <input type="text" name="address" onChange={handlePersonalInfoChange} placeholder="address" required value={personalInfo.address} />

      <input type="text" name="phone" onChange={handlePersonalInfoChange} placeholder="phone number" required value={personalInfo.phone} />
    </form>
  );
};

export default FormInfo;
