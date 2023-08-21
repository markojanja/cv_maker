const ButtonGroup = ({ handleSave, handleCancel, handleDelete }) => {
  return (
    <div className="button-group">
      <button type="button" onClick={handleSave}>
        Save
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="button" onClick={handleDelete}>
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default ButtonGroup;
