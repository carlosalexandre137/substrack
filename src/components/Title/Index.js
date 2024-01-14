const Title = ({ between, children }) => {
  return (
    <div className="mt-8">
      <h1 className={`text-2xl font-bold text-dark-black ${between === true ? "flex justify-between items-center" : ""}`}>{children}</h1>
    </div>
  );
};

export default Title;
