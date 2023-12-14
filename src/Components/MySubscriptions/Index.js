import Card from "../Card/Index";
import Title from "../Title/Index";

const MySubscriptions = () => {
  return (
    <section className="mt-14">
      <Title text="Minhas assinaturas" />
      {/* <p className="mt-10 text-center text-light-purple">Você não tem assinaturas registradas</p> */}
      <div className="flex gap-5 mt-5">
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default MySubscriptions;
