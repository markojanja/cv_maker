const ProfileSection = ({ profile }) => {
  return (
    <div className="profile-section">
      <h2 className="title">Profile</h2>
      <p>{profile}</p>
    </div>
  );
};

export default ProfileSection;
