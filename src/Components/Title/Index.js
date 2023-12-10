const Title = (props) => {
  return (
    <div className="mt-8 flex items-center justify-between">
      <h1 class="text-2xl font-bold text-dark-black">{props.text}</h1>
      {props.children}
    </div>
  );
};

export default Title;
