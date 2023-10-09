export function ControlledInput({ type, label, onChange, value, name, error }) {
  return (
    <div className="column input-container">
      <label htmlFor={name} className={error ? "text-red" : ""}>
        {label}
      </label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
}
