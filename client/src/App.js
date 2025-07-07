// App.js

import { Routes, Route } from "react-router-dom";
import Header from "./components/HeaderComponent/Header.tsx";
import HomePage from "./Pages/HomePage/HomePage.tsx";
import Login from "./Pages/LoginForm/LoginForm.tsx"; // Giả sử bạn đã tạo component Login
import Footer from "./components/FooterComponent/Footer.tsx";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.tsx";
import NotFound from "./Pages/NotFound/NotFound.tsx";
import Class1 from "./ClassItem/Class1.tsx";
import Class2 from "./ClassItem/Class2.tsx";
import Class3 from "./ClassItem/Class3.tsx";
import Class4 from "./ClassItem/Class4.tsx";
import Class5 from "./ClassItem/Class5.tsx";
import Class6 from "./ClassItem/Class6.tsx";
import Class7 from "./ClassItem/Class7.tsx";
import Class8 from "./ClassItem/Class8.tsx";
import Class9 from "./ClassItem/Class9.tsx";
import Class10 from "./ClassItem/Class10.tsx";
import Class11 from "./ClassItem/Class11.tsx";
import Class12 from "./ClassItem/Class12.tsx";
import "./App.css";
import ContactPage from "./Pages/ContactPage/ContactPage.tsx";
import DonatePage from "./Pages/DonatePage/DonatePage.tsx";
import IntroductionPage from "./Pages/Introduction/IntroductionPage.tsx";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/class1" element={<Class1 />} />
          <Route path="/class2" element={<Class2 />} />
          <Route path="/class3" element={<Class3 />} />
          <Route path="/class4" element={<Class4 />} />
          <Route path="/class5" element={<Class5 />} />
          <Route path="/class6" element={<Class6 />} />
          <Route path="/class7" element={<Class7 />} />
          <Route path="/class8" element={<Class8 />} />
          <Route path="/class9" element={<Class9 />} />
          <Route path="/class10" element={<Class10 />} />
          <Route path="/class11" element={<Class11 />} />
          <Route path="/class12" element={<Class12 />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/about" element={<IntroductionPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
