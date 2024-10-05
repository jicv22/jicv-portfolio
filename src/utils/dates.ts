export function getMothYearDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    month: "2-digit",
    year: "numeric",
  });
}

export function getDayMonthYearDate(date: Date) {
  return date.toLocaleDateString("en-GB");
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}
