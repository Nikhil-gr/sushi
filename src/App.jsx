import MenuPage from "./pages/MenuPage";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ReservationPage from "./pages/ReservationPage";
import FrontPage from "./pages/FrontPage";
import ContactPage from "./pages/ContactPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
