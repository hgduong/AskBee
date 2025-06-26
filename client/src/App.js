// App.js

import { Routes, Route } from "react-router-dom";
import Header from "./components/HeaderComponent/Header.tsx";
import Home from "./Pages/HomePage.tsx";
import Login from "./LoginForm/LoginForm.tsx"; // Giả sử bạn đã tạo component Login
import Footer from "./components/FooterComponent/Footer.tsx";
import RegisterPage from "./RegisterPage/RegisterPage.tsx";
import NotFound from "./NotFound/NotFound.tsx";
import Class6 from "./ClassItem/Class6.tsx";
import Class7 from "./ClassItem/Class7.tsx";
import Class8 from "./ClassItem/Class8.tsx";
import Class9 from "./ClassItem/Class9.tsx";
import Class10 from "./ClassItem/Class10.tsx";
import Class11 from "./ClassItem/Class11.tsx";
import Class12 from "./ClassItem/Class12.tsx";
import "./App.css";
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
          <Route path="*" element={<NotFound />} />
          <Route path="/class6" element={<Class6 />} />
          <Route path="/class7" element={<Class7 />} />
          <Route path="/class8" element={<Class8 />} />
          <Route path="/class9" element={<Class9 />} />
          <Route path="/class10" element={<Class10 />} />
          <Route path="/class11" element={<Class11 />} />
          <Route path="/class12" element={<Class12 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
