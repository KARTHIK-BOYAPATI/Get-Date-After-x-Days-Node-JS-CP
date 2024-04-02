const getDateAfterXDays = (days) => {
  const date = new Date(2020, 7, 22 + days);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export default getDateAfterXDays;
