import Header from "./Components/Header/Index";
import MySubscriptions from "./Components/MySubscriptions/Index";
import NewSubscription from "./Components/NewSubscription/Index";
import "./App.scss";
import Footer from "./Components/Footer/Index";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="px-5">
        <NewSubscription />
        <MySubscriptions />
        <Footer />
      </main>
    </div>
  );
}

export default App;
