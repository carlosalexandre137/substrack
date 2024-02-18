import { ISubscription } from "@/shared/interfaces/ISubscription";

export const formatValuesSubscription = ({
  name,
  link,
  plan,
  price,
  date,
  modality,
}: ISubscription): ISubscription => {
  return {
    name: name.trim(),
    link: link.trim(),
    plan: plan.trim(),
    price: price,
    date: date,
    modality: modality,
  };
};
