import Front from "./components/Front";
import MenuPage from "./pages/MenuPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/menu" element={<MenuPage />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
