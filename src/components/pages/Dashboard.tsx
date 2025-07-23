import React, { useState, useEffect } from 'react';
import { SciFiProgressBar, SciFiButton, SciFiPanel, SciFiSlider, SciFiMiniMap, 
         SciFiNotification, SciFiAvatarDisplay, SciFiDialog } from '../common/UIComponents';

const Dashboard: React.FC = () => {
  // State for progress values with animation
  const [progressValues, setProgressValues] = useState({
    energy: 60,
    defense: 80,
    economy: 68,
  });

  // State for progress bars
  const [progBars, setProgBars] = useState({
    system: 85,
    ai: 92, 
    threat: 25
  });

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogVariant, setDialogVariant] = useState<'v1' | 'v2' | 'v3' | 'v4'>('v1');
  
  // Notifications state
  const [notification, setNotification] = useState<string | null>(null);

  // Animate values
  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValues({
        energy: Math.floor(55 + Math.random() * 15),
        defense: Math.floor(75 + Math.random() * 10),
        economy: Math.floor(60 + Math.random() * 15),
      });
      
      setProgBars({
        system: Math.floor(80 + Math.random() * 10),
        ai: Math.floor(88 + Math.random() * 8),
        threat: Math.floor(20 + Math.random() * 10)
      });
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  // Function to show notification
  const showNotification = (type: string) => {
    setNotification(type);
    setTimeout(() => setNotification(null), 3000);
  };

  // News items data
  const newsItems = [
    {
      id: 1,
      type: 'info',
      title: 'Cải tổ công nghệ',
      time: '12:45',
      content: 'Công nghệ nano mới đã tăng hiệu suất năng lượng thêm 5%',
    },
    {
      id: 2,
      type: 'danger',
      title: 'Khủng hoảng',
      time: '09:27',
      content: 'Xung đột vùng biên giới đã bắt đầu - chuẩn bị quân đội',
    },
    {
      id: 3,
      type: 'success',
      title: 'Phát triển',
      time: '14:32',
      content: 'Thành phố Alpha-7 đã hoàn thành xây dựng',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Nghiên cứu',
      time: '16:05',
      content: 'Dự án lượng tử LZ-24 đã đạt mốc quan trọng',
    },
  ];

  // Slider values
  const [sliderValues, setSliderValues] = useState({
    power: 75,
    defense: 50,
    economy: 60
  });

  return (
    <>
      <div className="section-header">
        <div className="section-title-container">
          <h2 className="section-title">
            <span className="section-title-prefix">SYS.MODULE</span>
              DASHBOARD.tsx
            <div className="section-title-pulse"></div>
          </h2>
        </div>
        <div className="section-header-line"></div>
      </div>
      
      <div className="dashboard-grid">
        {/* Main content area */}
        
        
        {/* Side panels */}
        <div className="dashboard-side">
          {/* Avatar display */}
          
          
          
          
          {/* System status panel */}
          <div className="card">

            
            <div className="card-header">
              <h3 className="card-title">
                <div className="card-title-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                    <line x1="12" y1="2" x2="12" y2="12"></line>
                  </svg>
                </div>
                Stats
              </h3>
              <div className="card-header-line"></div>
            </div>
            
            
            
            <div className="progress-list">
              <div className="progress-item">
                <div className="progress-label">
                  <svg className="progress-label-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  Hiệu suất Hệ thống
                </div>
                <div className="progress-bar progress-bar-blue">
                  <div className="progress-bar-inner" style={{ width: `${progBars.system}%` }}>
                  </div>
                </div>
                <div className="progress-value text-blue">{progBars.system}%</div>
              </div>
              
              <div className="progress-item">
                <div className="progress-label">
                  <svg className="progress-label-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                    <path d="M21.18 8.02A10 10 0 0 0 17.6 4"></path>
                  </svg>
                  Ổn định AI
                </div>
                <div className="progress-bar progress-bar-green">
                  <div className="progress-bar-inner" style={{ width: `${progBars.ai}%` }}>
                  </div>
                </div>
                <div className="progress-value text-green">{progBars.ai}%</div>
              </div>
              
              <div className="progress-item">
                <div className="progress-label">
                  <svg className="progress-label-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  Mối đe dọa
                </div>
                <div className="progress-bar progress-bar-red">
                  <div className="progress-bar-inner" style={{ width: `${progBars.threat}%` }}>
                  </div>
                </div>
                <div className="progress-value text-red">{progBars.threat}%</div>
              </div>
            </div>
          </div>
          
          {/* News panel */}
          <div className="card" style={{ marginTop: '1rem', flex: 1 }}>

            
            <div className="card-header">
              <h3 className="card-title">
                <div className="card-title-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                Tin tức
              </h3>
              <div className="card-header-line"></div>
              <div className="card-status" style={{ 
                background: 'rgba(0, 168, 255, 0.1)', 
                borderColor: 'var(--color-accent-blue)' 
              }}>
                <span style={{ color: 'var(--color-accent-blue)' }}>
                  NEW
                </span>
                <div style={{ 
                  marginLeft: '5px', 
                  width: '4px', 
                  height: '4px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--color-accent-blue)',
                  animation: 'pulse 2s infinite' 
                }}></div>
              </div>
            </div>
            
            <div className="news-list">
              {newsItems.map(item => (
                <div key={item.id} className={`news-item news-item-${item.type}`}>
                  <div className="news-header">
                    <h4 className="news-title">
                      <span className="news-indicator"></span>
                      {item.title}
                    </h4>
                    <span className="news-time">{item.time}</span>
                  </div>
                  <p className="news-content">{item.content}</p>
                </div>
              ))}
            </div>
            
            <div className="news-footer">
              <button className="news-view-more">
                <span>XEM TẤT CẢ</span>
                <svg className="news-view-more-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          
          <div className="card-header">
            <h3 className="card-title">
              <div className="card-title-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              Tổng quan Quốc gia
            </h3>
            <div className="card-header-line"></div>
            <div className="card-status">
              <span className="card-status-label">SYS.STATUS:</span>
              <span className="card-status-value">ACTIVE</span>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Show notification if active */}
      {notification && (
        <SciFiNotification 
          type={notification as 'complete' | 'victory' | 'win' | 'perfect' | 'levelup' | 'gameover' | 'defeat' | 'fail'} 
        />
      )}
      
      {/* Dialog popup */}
      <SciFiDialog
        title={`Dialog Style ${dialogVariant.substring(1)}`}
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        variant={dialogVariant}
        actions={
          <>
            <SciFiButton 
              variant="secondary" 
              onClick={() => setDialogOpen(false)}
              shape={dialogVariant === 'v4' ? 'hexagon' : 'default'}
            >
              NO
            </SciFiButton>
            <SciFiButton 
              variant="primary" 
              onClick={() => setDialogOpen(false)}
              shape={dialogVariant === 'v4' ? 'hexagon' : 'default'}
            >
              YES
            </SciFiButton>
          </>
        }
      >
        <p>This is a sci-fi window popup {dialogVariant}</p>
        <p style={{ color: '#f0d100' }}>(More style options for you!)</p>
      </SciFiDialog>
    </>
  );
};

export default Dashboard;