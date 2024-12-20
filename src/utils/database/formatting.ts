import { format } from "date-fns";

const pb_date = (date: Date): string => {
  if (!date) throw Error("Please provide a valid date object!");
  return format(date, "yyyy-MM-dd");
}

export {
  pb_date
}