const ProfileSection = ({ profile }) => {
  return (
    profile !== '' && (
      <div className="content-container">
        <h2 className="title">Profile</h2>
        <p>{profile}</p>
      </div>
    )
  );
};

export default ProfileSection;
