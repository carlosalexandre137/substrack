import { ISubscription } from "../shared/interfaces/ISubscription";

export const SubscriptionGetAll = (): ISubscription[] => {
  const subscriptions = localStorage.getItem("subscriptions") ?? "[]";
  
  return JSON.parse(subscriptions) ?? [];
};

export const SubscriptionFind = (id: number): ISubscription | false => {
  const subscriptions = SubscriptionGetAll();
  return subscriptions.find((subscription: ISubscription) => Number(subscription.id) === Number(id)) ?? false;
};

const SubscriptionCreateId = () => {
  const subscriptions = SubscriptionGetAll();
  const identifiers = subscriptions.map((subscription) => subscription.id);
  
  let id = null;
  do {
    id = Math.ceil(Math.random() * 3000) + new Date().getTime();
  } while (identifiers.includes(id));

  return id;
};

export const SubscriptionCreate = (subscription: ISubscription): ISubscription => {
  subscription.id = SubscriptionCreateId();

  const subscriptions = SubscriptionGetAll();
  localStorage.setItem("subscriptions", JSON.stringify([subscription, ...subscriptions]));
  return subscription;
};
