export const subscriptionAll = () => {
  return JSON.parse(localStorage.getItem("subscriptions")) ?? [];
};

const subscriptionCreateId = () => {
  const subscriptions = subscriptionAll();
  const identifiers = subscriptions.map((item) => item.id);
  var id = null;
  do {
    id = Math.ceil(Math.random() * 3000) + new Date().getTime();
  } while (identifiers.includes(id));

  return id;
};

export const subscriptionCreate = (subscription) => {
  subscription.id = subscriptionCreateId();

  const subscriptions = JSON.parse(localStorage.getItem("subscriptions")) ?? [];
  localStorage.setItem("subscriptions", JSON.stringify([subscription, ...subscriptions]));
  return subscription;
};

export const subscriptionDelete = (id) => {
  const subscriptions = subscriptionAll();
  const newSubscriptions = [];
  for (const key in subscriptions) {
    let item = subscriptions[key];
    if (item.id !== id) {
      newSubscriptions.push(item);
    }
  }
  localStorage.setItem("subscriptions", JSON.stringify(newSubscriptions));
};

export const subscriptionUpdate = (subscription, newSubscription) => {
  const subscriptions = subscriptionAll();
  const newSubscriptions = [];

  newSubscription.id = subscription.id;

  for (const key in subscriptions) {
    let item = subscriptions[key];
    if (item.id === subscription.id) {
      item = newSubscription;
    }
    newSubscriptions.push(item);
  }
  localStorage.setItem("subscriptions", JSON.stringify(newSubscriptions));
};
