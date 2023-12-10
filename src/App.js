import Header from "./Components/Header/Index";
import MySubscriptions from "./Components/MySubscriptions/Index";
import NewSubscription from "./Components/NewSubscription/Index";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="px-5">
        <NewSubscription />
        <MySubscriptions />
      </main>
    </div>
  );
}

export default App;
