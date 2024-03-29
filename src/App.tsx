import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Main from "./components/Layouts/main";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Subscription from "./pages/Subscription";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";
import EditSubscription from "./pages/EditSubscription";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyles />
      <HelmetProvider>
        <SubscriptionProvider>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Home />} />
              <Route path="assinaturas/registrar" element={<Register />} />
              <Route path="assinaturas/:id" element={<Subscription />} />
              <Route
                path="assinaturas/:id/editar"
                element={<EditSubscription />}
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </SubscriptionProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
