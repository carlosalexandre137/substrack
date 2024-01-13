export const formatItemsSubscription = ({ nameSubscription, website, plan, price, date, modelSubscription }) => {
  let dateList = date.split("-");

  return {
    name: nameSubscription.trim(),
    website: website.trim(),
    plan: plan.trim(),
    price: price.replaceAll(".", "").replace(",", ".").trim(),
    date: new Date(dateList[0], dateList[1] - 1, dateList[2]).toJSON(),
    modelSubscription: modelSubscription,
  };
};

export const formatNumber = (num, lang = "pt-BR") => {
  return Number(num).toLocaleString(lang, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
