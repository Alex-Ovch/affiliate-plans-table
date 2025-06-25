const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getMonthRange(
  startIndex: number
): { index: number; label: string }[] {
  return Array.from({ length: 6 }, (_, i) => {
    const index = (startIndex + i) % 12;
    return { index, label: monthNames[index] };
  });
}

export function getCurrentMonthIndex(): number {
  return new Date().getMonth(); // от 0 до 11
}
