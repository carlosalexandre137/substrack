import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SubscriptionProvider } from "contexts/SubscriptionContext";
import Home from "pages/Home";
import Register from "pages/Subscriptions/Register";
import Main from "components/Layouts/Main";
import Edit from "pages/Subscriptions/Edit";
import NotFound from "components/NotFound/Index";

function App() {
  return (
    <BrowserRouter>
      <SubscriptionProvider>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />}></Route>

            <Route path="assinaturas">
              <Route path="registrar" element={<Register />} />
              <Route path="editar/:id" element={<Edit />} />
            </Route>

            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </SubscriptionProvider>
    </BrowserRouter>
  );
}

export default App;
