export function formatDateTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const timeString = date.toLocaleTimeString(undefined, timeOptions);
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };
  const dateString = date.toLocaleDateString(undefined, dateOptions);

  return `${timeString} ${dateString}`;
}
