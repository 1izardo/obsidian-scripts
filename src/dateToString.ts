import { parseDate } from "chrono-node";

export default function dateToString(date: string, timezone: string): string {
  const parsedDate = parseDate(date, { timezone: timezone });
  const formattedDate = parsedDate
    .toLocaleDateString("en-GB")
    .split("/")
    .reverse()
    .join("-");
  return formattedDate;
}
