import { ChangeEvent } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function PhoneInput({ value, onChange, className }: PhoneInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = formatPhone(rawValue);
    onChange(formattedValue);
  };

  const formatPhone = (value: string) => {
    if (value.length <= 10) {
      return value
        .replace(/(\d{2})(\d{0,4})/, "($1) $2")
        .replace(/(\d{4})(\d{0,4})/, "$1-$2");
    }
    return value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className={className}
      placeholder="(00) 0000-0000"
    />
  );
}
