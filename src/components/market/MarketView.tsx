import React from 'react';

const MarketView: React.FC = () => {
  return (
    <div className="market-view">
      <div className="section-header">
        <div className="page-title-container">
          <h2 className="page-title">
            <span className="page-title-prefix">SYS.MODULE</span>
            Thị trường
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
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M21 12H3M12 3v18" />
            </svg>
            Thị trường
          </h3>
          <div className="component-header-line"></div>
        </div>
        
        <p className="text-secondary">Thông tin chi tiết về thị trường sẽ hiển thị ở đây.</p>
      </div>
    </div>
  );
};

export default MarketView;