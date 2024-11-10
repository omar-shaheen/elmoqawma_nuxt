export function getDateNow() {
  return new Date(new Date().toLocaleString("en-US", {timeZone: "Africa/Cairo"}));
}
