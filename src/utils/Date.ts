export const convertDateFormInDateObject = (date: string): Date => {
  return new Date(date.replace(/-/g, ","));
};

export const formatToReadableDate = (date: Date): string => {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = monthToString(date.getMonth());
  const year = date.getFullYear();

  return `${day} de ${month} de ${year}`;
};

export const monthToString = (month: number): string => {
  const months: Record<number, string> = {
    0: "janeiro",
    1: "fevereiro",
    2: "março",
    3: "abril",
    4: "maio",
    5: "junho",
    6: "julho",
    7: "agosto",
    8: "setembro",
    9: "outubro",
    10: "novembro",
    11: "dezembro",
  };
  return months[month] ?? "...";
};
