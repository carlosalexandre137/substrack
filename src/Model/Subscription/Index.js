export const subscriptionAll = () => {
  return JSON.parse(localStorage.getItem("subscriptions")) ?? [];
};

export const subscriptionCreateId = () => {
  const subscriptions = subscriptionAll();
  const identifiers = subscriptions.map((item) => item.id);
  var id = null;
  do {
    id = Math.ceil(Math.random() * 3000) + new Date().getTime();
  } while (identifiers.includes(id));

  return id;
};

export const subscriptionUpdate = (subscriptions) => {
  localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
};
