import Header from "./Components/Header/Index";
import NewSubscription from "./Components/NewSubscription/Index";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="px-5">
        <NewSubscription />
      </main>
    </div>
  );
}

export default App;
