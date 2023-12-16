import Card from "../Card/Index";
import Title from "../Title/Index";

const MySubscriptions = ({ subscriptions }) => {
  return (
    <section className="mt-14">
      <Title text="Minhas assinaturas" />
      {subscriptions.length > 0 ? (
        <div className="grid grid-flow-col sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:grid-flow-row overflow-x-auto overflow-y-hidden gap-5 mt-5 pb-1">
          {subscriptions.map((subscription) => (
            <Card
              nameSubscription={subscription.nameSubscription}
              website={subscription.website}
              plan={subscription.plan}
              price={subscription.price}
              date={subscription.date}
              modelSubscription={subscription.modelSubscription}
              key={subscription.nameSubscription}
            />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-light-purple">Você não tem assinaturas registradas</p>
      )}
    </section>
  );
};

export default MySubscriptions;
