// App.js

import { Routes, Route } from "react-router-dom";
import Header from "./components/HeaderComponent/Header.tsx";
import Home from "./Pages/HomePage.tsx";
import Login from "./LoginForm/LoginForm.tsx"; // Giả sử bạn đã tạo component Login
import Footer from "./components/FooterComponent/Footer.tsx";
import RegisterPage from "./RegisterPage/RegisterPage.tsx";
import NotFound from "./NotFound/NotFound.tsx";
const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};


export default App;
