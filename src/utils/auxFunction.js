export default function invertDateFormat(dateString) {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  const [year, month, day] = dateString.split("-");
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}
