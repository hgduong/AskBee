import LoginForm from './LoginForm/LoginForm.tsx';
import HomePage from './Pages/HomePage.tsx';
import Header from './components/HeaderComponent/Header.tsx';
import { FooterPage } from './components/FooterComponent/Footer.tsx';
function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <HomePage/>
      <LoginForm />
      <FooterPage/>
      </>
    </div>
  );
}

export default App;
