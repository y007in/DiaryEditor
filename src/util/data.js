export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10); //오늘의 날짜 불러옴
};
