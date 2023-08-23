const FormInfo = ({ personalInfo, setPersonalInfo }) => {
  function handlePersonalInfoChange(e) {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  }
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Personal information</h2>
      </div>
      <form className="form">
        <input
          type="text"
          name="fullname"
          onChange={handlePersonalInfoChange}
          placeholder="full name"
          required
          value={personalInfo.fullname}
          autoFocus
        />

        <input
          type="email"
          name="email"
          onChange={handlePersonalInfoChange}
          placeholder="email"
          required
          value={personalInfo.email}
        />

        <input
          type="text"
          name="address"
          onChange={handlePersonalInfoChange}
          placeholder="address"
          required
          value={personalInfo.address}
        />

        <input
          type="text"
          name="phone"
          onChange={handlePersonalInfoChange}
          placeholder="phone number"
          required
          value={personalInfo.phone}
        />
      </form>
    </div>
  );
};

export default FormInfo;
