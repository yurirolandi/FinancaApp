export const getDateTimeObject = (date, time) => {
  const dateTimeObject = new Date(date);
  const [hours, minutes] = time.split(":");
  dateTimeObject.setUTCHours(hours);
  dateTimeObject.setUTCMinutes(minutes);

  return dateTimeObject;
};

export const getDateTimeIsoString = (date, time) => {
  const dateTimeObject = getDateTimeObject(date, time);
  const dateTimeIsoString = dateTimeObject.toISOString();

  return dateTimeIsoString;
};

export const isDateTimeBeforeToday = (date, time) => {
  const today = new Date();
  const timezone = today.getTimezoneOffset() / 60;
  const hojeHoras = today.getUTCHours() - timezone;
  today.setUTCHours(hojeHoras);

  const dateTimeObject = getDateTimeObject(date, time);
  return dateTimeObject < today;
};

export const getDateTimeFromIsoString = (dateTimeString) => {
  const [date, time] = dateTimeString.split("T");

  return [date, time.slice(0, -3)];
};

export const isDateTimeStringBeforeToday = (dateTimeString) => {
  const [date, time] = getDateTimeFromIsoString(dateTimeString);

  return isDateTimeBeforeToday(date, time);
};

export const getLocaleStringFromIso = (dateTimeString) => {
  const date = new Date(dateTimeString);

  return date.toLocaleString().slice(0, -3);
};
