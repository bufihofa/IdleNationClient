import React from 'react';

const BuildingView: React.FC = () => {
  return (
    <div className="building-view">
      <div className="section-header">
        <div className="page-title-container">
          <h2 className="page-title">
            <span className="page-title-prefix">SYS.MODULE</span>
            Xây dựng
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
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
              <path d="M9 22v-4h6v4" />
              <path d="M8 6h.01" />
              <path d="M16 6h.01" />
              <path d="M12 6h.01" />
              <path d="M12 10h.01" />
              <path d="M12 14h.01" />
              <path d="M16 10h.01" />
              <path d="M16 14h.01" />
              <path d="M8 10h.01" />
              <path d="M8 14h.01" />
            </svg>
            Xây dựng
          </h3>
          <div className="component-header-line"></div>
        </div>
        
        <p className="text-secondary">Thông tin về xây dựng cơ sở hạ tầng sẽ hiển thị ở đây.</p>
      </div>
    </div>
  );
};

export default BuildingView;