const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export const getCookie = (name) => {
  const cookie = window.document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(name));

  return cookie?.split("=")[1] || "";
};

export const deleteCookies = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  document.cookie = `token=;expires=${date.toString()}`;
  document.cookie = `userName=;expires=${date.toString()}`;
};

export const timestampToDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = formatDay(date.getDate());
  const month = formatMonth(date.getMonth());
  const year = date.getFullYear();
  const hour = formatHour(date.getHours());
  const minutes = date.getMinutes();
  const seconds = formatSeconds(date.getSeconds());

  return `${day} ${month} ${year} - ${hour}:${minutes}:${seconds}`;
};

const formatDay = (day) => {
  return String(day).padStart(2, "0");
};

const formatMonth = (month) => {
  return MONTHS[month];
};

const formatHour = (hour) => {
  return String((24 + hour - 2) % 24).padStart(2, "0");
};

const formatSeconds = (seconds) => {
  return String(seconds).padStart(2, "0");
};
