export function formatPhone(value: string) {
  const cleanedValue = value.replace(/\D/g, "").slice(0, 11);

  if (cleanedValue.length <= 10) {
    return cleanedValue
      .replace(/(\d{2})(\d{0,4})/, "($1) $2")
      .replace(/(\d{4})(\d{0,4})/, "$1-$2");
  }

  return cleanedValue.replace(
    /(\d{2})(\d{1})(\d{0,4})(\d{0,4})/,
    "($1) $2 $3-$4"
  );
}
