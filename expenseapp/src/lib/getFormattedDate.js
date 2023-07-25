export default function getFormattedDate(date) {
  return {
    month: date.toLocaleString("en-US", { month: "long" }),
    day: date.toLocaleString("en-US", { day: "2-digit" }),
    year: date.getFullYear(),
  };
}
