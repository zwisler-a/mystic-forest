import './CheckBox.css';

export const CheckBox = ({ isChecked, onChange, label }: { isChecked: boolean; onChange: (checked: boolean) => void; label: string }) => {
  const handleChange = () => {
    onChange(!isChecked);
  };

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        aria-checked={isChecked}
        aria-label={label}
      />
      <span className="custom-checkbox" />
      <span className="label-text">{label}</span>
    </label>
  );
}; 