const ButtonGroup = ({ handleSave, handleCancel, handleDelete }) => {
  return (
    <div className="button-group">
      <button type="button" onClick={handleSave}>
        save
      </button>
      <button type="button" onClick={handleCancel}>
        cancel
      </button>
      <button type="button" onClick={handleSave}>
        delete
      </button>
    </div>
  );
};

export default ButtonGroup;
