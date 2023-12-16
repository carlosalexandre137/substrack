import Header from "./Components/Header/Index";
import MySubscriptions from "./Components/MySubscriptions/Index";
import NewSubscription from "./Components/NewSubscription/Index";
import "./App.scss";
import Footer from "./Components/Footer/Index";
import Modal from "./Components/Modal/Index";
import { useState } from "react";
import Form from "./Components/Form/Index";

function App() {
  const [open, setOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);

  const updateModal = (state) => {
    setOpen(state);
  };

  const saveSubscription = (subscription) => {
    setSubscriptions([...subscriptions, subscription]);
  };

  return (
    <div className="App">
      <Header />
      <main className="px-5">
        <NewSubscription updateModal={updateModal} />
        <MySubscriptions subscriptions={subscriptions} />
        <Modal open={open} updateModal={updateModal}>
          <Form updateModal={updateModal} saveSubscription={saveSubscription} />
        </Modal>
        <Footer />
      </main>
    </div>
  );
}

export default App;
