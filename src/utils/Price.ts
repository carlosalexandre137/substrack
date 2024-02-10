export const FormatPrice = (num: string | number, lang: string = "pt-BR") => {
  return Number(num).toLocaleString(lang, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};