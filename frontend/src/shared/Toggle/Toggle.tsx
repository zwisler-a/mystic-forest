import './Toggle.css'

export const Toggle = ({ isChecked, onChange, label }: { isChecked: boolean; onChange: (checked: boolean) => void, label:string }) => {
  const toggleSwitch = () => {
    onChange(!isChecked);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleSwitch}
        aria-pressed={isChecked}
        aria-label="Toggle switch"
      />
      <span className="slider"></span>
      <span className="label-text">{label}</span>
    </label>
  );
}