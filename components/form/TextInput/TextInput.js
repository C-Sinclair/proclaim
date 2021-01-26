import { forwardRef } from "react";

export const TextInput = forwardRef(({ name, title, error }, ref) => {
  const id = `${name}-input`;
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input id={id} name={name} ref={ref} />
      {error && <span>{error.message}</span>}
    </div>
  );
});
