export function convertToDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour12: false,
    timeZone: 'UTC', // Adjust if needed
  });
}
