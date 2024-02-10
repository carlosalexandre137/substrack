export const convertDateFormInDateObject = (date: string): Date => {
  return new Date(date.replace(/-/g, ","));
}

