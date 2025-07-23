import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './auth-combined.css';

const AuthPage: React.FC = () => {
  // State để kiểm soát phần active (login hoặc register)
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // State cho form login
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  // State cho form register
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // State cho errors
  const [loginErrors, setLoginErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  
  const [registerErrors, setRegisterErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  
  // Hiệu ứng đếm trong panel thông tin
  const [countStats, setCountStats] = useState({
    population: 0,
    gdp: 0,
    happiness: 0
  });
  
  // Hiệu ứng đếm số liệu thống kê
  useEffect(() => {
    const targetStats = {
      population: 125.4,
      gdp: 7.2,
      happiness: 85
    };
    
    const increment = {
      population: targetStats.population / 40,
      gdp: targetStats.gdp / 40,
      happiness: targetStats.happiness / 40
    };
    
    const timer = setInterval(() => {
      setCountStats(prev => {
        const newStats = { ...prev };
        
        if (prev.population < targetStats.population) {
          newStats.population = Math.min(prev.population + increment.population, targetStats.population);
        }
        
        if (prev.gdp < targetStats.gdp) {
          newStats.gdp = Math.min(prev.gdp + increment.gdp, targetStats.gdp);
        }
        
        if (prev.happiness < targetStats.happiness) {
          newStats.happiness = Math.min(prev.happiness + increment.happiness, targetStats.happiness);
        }
        
        return newStats;
      });
    }, 50);
    
    return () => clearInterval(timer);
  }, []);
  
  // Xử lý chuyển đổi giữa login và register
  const handleToggleAuth = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Bắt đầu animation, sau đó mới đổi state
    setTimeout(() => {
      setIsLoginActive(!isLoginActive);
      setIsAnimating(false);
    }, 100); // Thời gian animation
  };
  
  // Xử lý thay đổi input login
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  // Xử lý thay đổi input register
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  // Xử lý submit form login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors: { email?: string; password?: string } = {};
    
    // Validation
    if (!loginData.email) {
      newErrors.email = 'Email không được để trống';
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    if (!loginData.password) {
      newErrors.password = 'Mật khẩu không được để trống';
    } else if (loginData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    
    setLoginErrors(newErrors);
    
    // Process form if no errors
    if (Object.keys(newErrors).length === 0) {
      console.log('Login submitted', loginData);
      // Handle login logic here
    }
  };
  
  // Xử lý submit form register
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors: {
      username?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    
    // Validation
    if (!registerData.username) {
      newErrors.username = 'Tên người dùng không được để trống';
    } else if (registerData.username.length < 3) {
      newErrors.username = 'Tên người dùng phải có ít nhất 3 ký tự';
    }
    
    if (!registerData.email) {
      newErrors.email = 'Email không được để trống';
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    if (!registerData.password) {
      newErrors.password = 'Mật khẩu không được để trống';
    } else if (registerData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    
    if (!registerData.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận mật khẩu';
    } else if (registerData.confirmPassword !== registerData.password) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }
    
    setRegisterErrors(newErrors);
    
    // Process form if no errors
    if (Object.keys(newErrors).length === 0) {
      console.log('Register submitted', registerData);
      // Handle register logic here
    }
  };

  return (
    <div className="auth-container">
      {/* Background cyber lines */}
      <div className="cyber-lines">
        <div className="cyber-line"></div>
        <div className="cyber-line"></div>
        <div className="cyber-line"></div>
        <div className="cyber-line"></div>
        <div className="cyber-vertical-line"></div>
        <div className="cyber-vertical-line"></div>
        <div className="cyber-vertical-line"></div>
        <div className="cyber-vertical-line"></div>
      </div>
      
      <div className={`auth-panel ${isAnimating ? 'animating' : ''} ${isLoginActive ? 'login-active' : 'register-active'}`}>
        <div className="corner-tl"></div>
        <div className="corner-tr"></div>
        <div className="corner-bl"></div>
        <div className="corner-br"></div>
        
        {/* Info Panel - Hiển thị thông tin */}
        <div className="auth-info-panel">
          {/* Logo */}
          <div className="auth-logo">
            <div className="auth-logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
            </div>
            <div className="auth-logo-text">
              <div className="auth-logo-title">NOVA EMPIRE</div>
              <div className="auth-logo-subtitle">QUẢN LÝ QUỐC GIA</div>
            </div>
          </div>
          
          {/* Content for login info panel */}
          <div className={`auth-info-content ${isLoginActive ? 'active' : ''}`}>
            <h2 className="auth-info-title">Chào mừng trở lại</h2>
            <p className="auth-info-text">
              Đăng nhập để tiếp tục hành trình xây dựng và phát triển đế chế của bạn.
            </p>
            
            <div className="auth-stats">
              <div className="auth-stat">
                <div className="auth-stat-value">
                  {countStats.population.toFixed(1)}<span className="auth-stat-value-small">M</span>
                  <div className="auth-stat-blink"></div>
                </div>
                <div className="auth-stat-label">Dân số</div>
              </div>
              <div className="auth-stat">
                <div className="auth-stat-value">
                  {countStats.gdp.toFixed(1)}<span className="auth-stat-value-small">T</span>
                  <div className="auth-stat-blink"></div>
                </div>
                <div className="auth-stat-label">GDP</div>
              </div>
              <div className="auth-stat">
                <div className="auth-stat-value">
                  {countStats.happiness.toFixed(0)}<span className="auth-stat-value-small">%</span>
                  <div className="auth-stat-blink"></div>
                </div>
                <div className="auth-stat-label">Hạnh phúc</div>
              </div>
            </div>
            
            <div className="auth-globe">
              <div className="auth-globe-scan"></div>
            </div>
            
            <button className="auth-toggle-button" onClick={handleToggleAuth}>
              <span className="auth-toggle-button-text">Đăng ký</span>
              <div className="auth-toggle-button-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </button>
          </div>
          
          {/* Content for register info panel */}
          <div className={`auth-info-content ${!isLoginActive ? 'active' : ''}`}>
            <h2 className="auth-info-title">Tham gia với chúng tôi</h2>
            <p className="auth-info-text">
              Đăng ký để bắt đầu hành trình xây dựng và phát triển đế chế của riêng bạn.
            </p>
            
            <div className="auth-feature-list">
              <div className="auth-feature-item">
                <div className="auth-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div className="auth-feature-text">Quản lý quốc gia của riêng bạn</div>
              </div>
              <div className="auth-feature-item">
                <div className="auth-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div className="auth-feature-text">Phát triển kinh tế và quân sự</div>
              </div>
              <div className="auth-feature-item">
                <div className="auth-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div className="auth-feature-text">Tham gia vào liên minh quốc tế</div>
              </div>
              <div className="auth-feature-item">
                <div className="auth-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div className="auth-feature-text">Thực hiện các nhiệm vụ chiến lược</div>
              </div>
            </div>
            
            <button className="auth-toggle-button" onClick={handleToggleAuth}>
              <div className="auth-toggle-button-icon reverse">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <span className="auth-toggle-button-text">Đăng nhập</span>
            </button>
          </div>
        </div>
        
        {/* Form Panel - Chứa các form đăng nhập/đăng ký */}
        <div className="auth-form-panel">
          {/* Login Form */}
          <div className={`auth-form-content ${isLoginActive ? 'active' : ''}`}>
            <h2 className="auth-form-title">Đăng Nhập</h2>
            <p className="auth-form-subtitle">Nhập thông tin đăng nhập để truy cập hệ thống</p>
            
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <div className="auth-input-group">
                <input
                  type="email"
                  id="email"
                  className={`auth-input ${loginErrors.email ? 'error' : ''}`}
                  placeholder=" "
                  value={loginData.email}
                  onChange={handleLoginChange}
                />
                <label htmlFor="email" className="auth-input-label">Email</label>
                <div className="auth-input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="auth-input-error">{loginErrors.email}</div>
              </div>
              
              <div className="auth-input-group">
                <input
                  type="password"
                  id="password"
                  className={`auth-input ${loginErrors.password ? 'error' : ''}`}
                  placeholder=" "
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
                <label htmlFor="password" className="auth-input-label">Mật khẩu</label>
                <div className="auth-input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div className="auth-input-error">{loginErrors.password}</div>
              </div>
              
              <div className="auth-remember-forgot">
                <div className="auth-remember">
                  <input type="checkbox" id="remember" className="auth-checkbox" />
                  <label htmlFor="remember" className="auth-checkbox-label">Ghi nhớ đăng nhập</label>
                </div>
                <a href="#" className="auth-forgot-link">Quên mật khẩu?</a>
              </div>
              
              <button type="submit" className="auth-button">
                <span className="auth-button-text">ĐĂNG NHẬP</span>
                <div className="auth-button-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                </div>
              </button>
            </form>
            
            <div className="auth-social">
              <p className="auth-social-text">Hoặc đăng nhập với</p>
              <div className="auth-social-buttons">
                <button className="auth-social-button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button className="auth-social-button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </button>
                <button className="auth-social-button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="auth-toggle-mobile">
              <p className="auth-toggle-mobile-text">
                Chưa có tài khoản?
              </p>
              <button className="auth-toggle-mobile-button" onClick={handleToggleAuth}>
                Đăng ký ngay
              </button>
            </div>
          </div>
          
          {/* Register Form */}
          <div className={`auth-form-content ${!isLoginActive ? 'active' : ''}`}>
            <h2 className="auth-form-title">Đăng Ký</h2>
            <p className="auth-form-subtitle">Tạo tài khoản mới để bắt đầu</p>
            
            <form className="auth-form" onSubmit={handleRegisterSubmit}>
              <div className="auth-input-group">
                <input
                  type="text"
                  id="username"
                  className={`auth-input ${registerErrors.username ? 'error' : ''}`}
                  placeholder=" "
                  value={registerData.username}
                  onChange={handleRegisterChange}
                />
                <label htmlFor="username" className="auth-input-label">Tên người dùng</label>
                <div className="auth-input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="auth-input-error">{registerErrors.username}</div>
              </div>
              
              <div className="auth-input-group">
                <input
                  type="email"
                  id="email"
                  className={`auth-input ${registerErrors.email ? 'error' : ''}`}
                  placeholder=" "
                  value={registerData.email}
                  onChange={handleRegisterChange}
                />
                <label htmlFor="email" className="auth-input-label">Email</label>
                <div className="auth-input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="auth-input-error">{registerErrors.email}</div>
              </div>
              
              <div className="auth-input-group">
                <input
                  type="password"
                  id="password"
                  className={`auth-input ${registerErrors.password ? 'error' : ''}`}
                  placeholder=" "
                  value={registerData.password}
                  onChange={handleRegisterChange}
                />
                <label htmlFor="password" className="auth-input-label">Mật khẩu</label>
                <div className="auth-input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div className="auth-input-error">{registerErrors.password}</div>
              </div>
              
              <div className="auth-input-group">
                <input
                  type="password"
                  id="confirmPassword"
                  className={`auth-input ${registerErrors.confirmPassword ? 'error' : ''}`}
                  placeholder=" "
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                />
                <label htmlFor="confirmPassword" className="auth-input-label">Xác nhận mật khẩu</label>
                <div className="auth-input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="auth-input-error">{registerErrors.confirmPassword}</div>
              </div>
              
              <div className="auth-terms">
                <input type="checkbox" id="terms" className="auth-checkbox" />
                <label htmlFor="terms" className="auth-checkbox-label">
                  Tôi đồng ý với <a href="#" className="auth-terms-link">Điều khoản</a> và <a href="#" className="auth-terms-link">Chính sách</a>
                </label>
              </div>
              
              <button type="submit" className="auth-button">
                <span className="auth-button-text">ĐĂNG KÝ</span>
                <div className="auth-button-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                </div>
              </button>
            </form>
            
            <div className="auth-social">
              <p className="auth-social-text">Hoặc đăng ký với</p>
              <div className="auth-social-buttons">
                <button className="auth-social-button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button className="auth-social-button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </button>
                <button className="auth-social-button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="auth-toggle-mobile">
              <p className="auth-toggle-mobile-text">
                Đã có tài khoản?
              </p>
              <button className="auth-toggle-mobile-button" onClick={handleToggleAuth}>
                Đăng nhập ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;