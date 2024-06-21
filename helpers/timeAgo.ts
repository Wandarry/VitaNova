import { Timestamp } from "firebase/firestore";

export function timeAgo(timestamp: Timestamp): string {
  const date = timestamp.toDate();

  const year = 31536000;
  const month = 2592000;
  const day = 86400;
  const hour = 3600;
  const min = 60;

  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  let interval = Math.floor(seconds / year);

  if (isNaN(date.getTime())) {
    console.error("Invalid date provided to timeAgo function");
    return "Date invalide";
  }

  if (interval > 1) {
    return `${interval} ans`;
  }
  interval = Math.floor(seconds / month);
  if (interval > 1) {
    return `${interval} mois`;
  }
  interval = Math.floor(seconds / day);
  if (interval > 1) {
    return `${interval} jours`;
  }
  interval = Math.floor(seconds / hour);
  if (interval > 1) {
    return `${interval} heures`;
  }
  interval = Math.floor(seconds / min);
  if (interval > 1) {
    return `${interval} minutes`;
  }
  return `à l'instant`;
}
