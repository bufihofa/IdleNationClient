import React from 'react';

const EconomicView: React.FC = () => {
  return (
    <div className="economic-view">
      <div className="section-header">
        <div className="page-title-container">
          <h2 className="page-title">
            <span className="page-title-prefix">SYS.MODULE</span>
            Kinh tế
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
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
            Kinh tế
          </h3>
          <div className="component-header-line"></div>
        </div>
        
        <p className="text-secondary">Thông tin chi tiết về kinh tế sẽ hiển thị ở đây.</p>
      </div>
    </div>
  );
};

export default EconomicView;