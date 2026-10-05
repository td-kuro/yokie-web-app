import { useId } from 'react';

/** Labelled `<input>` styled like the prototype's form fields. Extra props go to the input. */
export function TextField({ label, className, ...inputProps }) {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input id={id} className="form-input" {...inputProps} />
    </div>
  );
}

/** Labelled `<select>`; `options` is a list of `{ value, label }`. */
export function SelectField({ label, options, className, ...selectProps }) {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select id={id} className="form-input" {...selectProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
