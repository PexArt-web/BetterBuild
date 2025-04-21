import React from "react";
import { Input } from "@/components/ui/input";

const SharedInput = React.forwardRef(({
  placeholder,
  type,
  id,
  name,
  className,
  autoComplete,
  required,
  onChange,
  onKeyDown,
  value,
  onFocus,
  onBlur
}, ref) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      value={value}
      className={className}
      autoComplete={autoComplete}
      required={required}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
    />
  );
});

export default SharedInput;
