import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm.tsx';
import HomePage from './Pages/HomePage.tsx';
import RegisterPage from './RegisterPage/RegisterPage.tsx';
import Header from './components/HeaderComponent/Header.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
