import React from 'react';

const FinanceView: React.FC = () => {
  return (
    <div className="finance-view">
      <div className="section-header">
        <div className="page-title-container">
          <h2 className="page-title">
            <span className="page-title-prefix">SYS.MODULE</span>
            Tài chính
            <div className="page-title-pulse"></div>
          </h2>
        </div>
        <div className="section-header-line"></div>
      </div>
      
      <div className="card">
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        
        <div className="card-top-line"></div>
        <div className="card-bottom-line"></div>
        
        <div className="component-header">
          <h3 className="component-title">
            <svg className="component-title-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <circle cx="12" cy="12" r="2" />
              <path d="M6 12h.01M18 12h.01" />
            </svg>
            Tài chính
          </h3>
          <div className="component-header-line"></div>
        </div>
        
        <p className="text-secondary">Thông tin chi tiết về tài chính sẽ hiển thị ở đây.</p>
      </div>
    </div>
  );
};

export default FinanceView;