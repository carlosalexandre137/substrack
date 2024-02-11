import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Main from "./components/Layouts/main";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Subscription from "./pages/Subscription";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <SubscriptionProvider>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="assinaturas/registrar" element={<Register />} />
            <Route path="assinaturas/:id" element={<Subscription />} />
          </Route>
        </Routes>
      </SubscriptionProvider>
    </BrowserRouter>
  );
};

export default App;
