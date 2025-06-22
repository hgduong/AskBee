import './LoginForm.css';
import { Button } from 'antd';
import {useNavigate} from 'react-router-dom';
// import beeImg from './Assets/imgbee.png';
// đường dẫn tùy theo vị trí file

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic for handling login
    // For example, you might want to call an API to authenticate the user
    // If successful, redirect to the dashboard or home page
    navigate('/dashboard');
  };

  return (
      <div className="login-page">
  <div className="bg-image"></div> {/* PHẢI CÓ */}
  <div className="login-content">
        
      </div>
    
    <div className="login-content">
       <form>
  <h1 className="title">🐝 Bee Login</h1>

  <div className="input-box">
    <label>Tài khoản</label>
    <input type="text" placeholder="Username" required />
  </div>

  <div className="input-box">
    <label>Mật khẩu</label>
    <input type="password" placeholder="Password" required />
  </div>

  <div className="remember-forgot">
    <label><input type="checkbox" /> Ghi nhớ</label>
    <span
      onClick={() => navigate('/forgot-password')}
      style={{ cursor: 'pointer', color: '#1890ff' }}
    >
      Quên mật khẩu?
    </span>
  </div>

  <Button type="primary" onClick={handleLogin} className="login-button">
    Đăng nhập
  </Button>

  <div className="register">
    <p>
      Chưa có tài khoản?{' '}
      <span
        onClick={() => navigate('/register')}
        style={{ cursor: 'pointer', color: '#1890ff' }}
      >
        Đăng ký
      </span>
    </p>
  </div>
</form>
        </div>
    
    </div>
  )
}

export default LoginForm;