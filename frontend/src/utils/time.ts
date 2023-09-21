import dayjs from "dayjs";

export const getUTC = () => {
  const offset = dayjs().utcOffset();
  return `UTC+${offset / 60}`;
};

export const formatDate = (time: any) => dayjs(time).format("YYYY/MM/DD");

export const formatTime = (time: number, formatter?: "-" | ".") => {
  if (formatter === "-") {
    return dayjs(time).format("YYYY-MM-DD HH:mm");
  }
  return dayjs(time).format("YYYY.MM.DD HH:mm");
};
