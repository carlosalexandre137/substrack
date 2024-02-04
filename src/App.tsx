import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Main from "./components/Layouts/main";
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="assinaturas/registrar" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
