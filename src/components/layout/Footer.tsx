import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-prefix">SYS.ID</span>
        NOVA EMPIRE © 2157 | 
        <span className="footer-version">ALPHA</span>
        v0.8.5
      </div>
      
      <div className="footer-right">
        <div className="footer-status footer-status-network">
          <div className="footer-status-indicator"></div>
          <span>NETWORK: ONLINE</span>
        </div>
        
        <div className="footer-status footer-status-ping">
          <div className="footer-status-indicator"></div>
          <span>PING: 15ms</span>
        </div>
        
        <div className="footer-status footer-status-fps">
          <div className="footer-status-indicator"></div>
          <span>FPS: 60</span>
        </div>
        
        <div className="footer-system-status">
          <svg className="footer-system-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
            <line x1="12" y1="2" x2="12" y2="12"></line>
          </svg>
          <span className="footer-system-text">SYS.ACTIVE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;