import Subscription from "../../controller/subscription/Index";

import Title from "../Title/Index";
import Card from "../Card/Index";
import { useSubscriptionContext } from "../../hooks/useSubscriptionContext";

const MySubscriptions = () => {
  const { subscriptions } = useSubscriptionContext();

  return (
    <section>
      <Title text="Minhas assinaturas" />
      {subscriptions.length > 0 ? (
        <div className="grid grid-flow-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-flow-row overflow-x-auto overflow-y-hidden gap-5 mt-5 pb-1">
          {subscriptions.map((subscription) => {
            const sub = new Subscription(subscription);
            return (
              <Card
                id={sub.id()}
                key={sub.id()}
                name={sub.name()}
                website={sub.website()}
                plan={sub.plan()}
                price={sub.price()}
                date={sub.date()}
                modelSubscription={sub.modelSubscription()}
              />
            );
          })}
        </div>
      ) : (
        <p className="mt-10 text-center text-light-purple">Você não tem assinaturas registradas</p>
      )}
    </section>
  );
};

export default MySubscriptions;
