/**
 * Custom formatDate Hook to format date data to display
 * @param dateString
 * @returns MMM DD YYYY
 */

export default function UseFormatDate(dateString: string) {
  const date = new Date(dateString);
  // formate date string
  const formattedDate = date.toDateString();
  // trim day of the week
  return formattedDate.slice(4, formattedDate.length);
}
