import Front from "./components/Front";
import MenuPage from "./pages/MenuPage";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ReservationPage from "./pages/ReservationPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Front />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
