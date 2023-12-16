import Card from "../Card/Index";
import Title from "../Title/Index";

const MySubscriptions = () => {
  return (
    <section className="mt-14">
      <Title text="Minhas assinaturas" />
      {/* <p className="mt-10 text-center text-light-purple">Você não tem assinaturas registradas</p> */}

      <div className="grid grid-flow-col sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:grid-flow-row overflow-x-auto overflow-y-hidden gap-5 mt-5 pb-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default MySubscriptions;
