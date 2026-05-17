import Front from "./components/Front";
import MenuPage from "./pages/MenuPage";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Front />} />
          <Route path="/menu" element={<MenuPage />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
