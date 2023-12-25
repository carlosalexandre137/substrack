import Header from "./Components/Header/Index";
import MySubscriptions from "./Components/MySubscriptions/Index";
import NewSubscription from "./Components/NewSubscription/Index";
import "./App.scss";
import Footer from "./Components/Footer/Index";
import Modal from "./Components/Modal/Index";
import { useState } from "react";
import { subscriptionAll, subscriptionCreate, subscriptionDelete, subscriptionUpdate } from "./Model/Subscription/Index";
import FormCreate from "./Components/FormCreate/Index";
import FormEdit from "./Components/FormEdit/Index";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [openFormEdit, setOpenFormEdit] = useState(false);
  const [subscriptions, setSubscriptions] = useState(subscriptionAll());
  const [subscription, setSubscription] = useState({});

  const updateModalForm = (state) => {
    setOpenForm(state);
  };

  const updateModalFormEdit = (state) => {
    setOpenFormEdit(state);
  };

  const saveSubscription = (subscription) => {
    subscriptionCreate(subscription);
    setSubscriptions(subscriptionAll());
  };

  const deleteSubscription = (id) => {
    subscriptionDelete(id);
    setSubscriptions(subscriptionAll());
  };

  const editSubscription = (sub) => {
    setSubscription(sub.toObject());
    updateModalFormEdit(true);
  };

  const updateSubscription = (subscription, newSubscription) => {
    subscriptionUpdate(subscription, newSubscription);
    setSubscriptions(subscriptionAll());
    updateModalFormEdit(false);
  };

  return (
    <div className="App">
      <Header />
      <main className="px-5">
        <NewSubscription updateModalForm={updateModalForm} />
        <MySubscriptions subscriptions={subscriptions} deleteSubscription={deleteSubscription} editSubscription={editSubscription} />
        <Modal open={openForm} updateModal={updateModalForm}>
          <FormCreate updateModal={updateModalForm} saveSubscription={saveSubscription} />
        </Modal>
        <Modal open={openFormEdit} updateModal={updateModalFormEdit}>
          <FormEdit updateModal={updateModalFormEdit} editSubscription={updateSubscription} subscription={subscription} />
        </Modal>
        <Footer />
      </main>
    </div>
  );
}

export default App;
