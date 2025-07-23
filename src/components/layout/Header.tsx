import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  gameTime: {
    year: number;
    month: number;
    day: number;
  };
}

// Thông tin hover panels
const populationInfo = {
  total: '125.4M',
  growth: '+1.2%',
  happiness: '87%',
  workforce: '68.3M',
  categories: [
    { name: 'Citizens', value: '102.1M', color: '#0ea5e9' },
    { name: 'Workers', value: '68.3M', color: '#22c55e' },
    { name: 'Scientists', value: '12.7M', color: '#a855f7' },
    { name: 'Military', value: '7.6M', color: '#ef4444' }
  ]
};

const gdpInfo = {
  total: '7.2T',
  growth: '+4.2%',
  sectors: [
    { name: 'Industry', value: '2.8T', percent: '39%', color: '#0ea5e9' },
    { name: 'Services', value: '3.1T', percent: '43%', color: '#22c55e' },
    { name: 'Research', value: '0.9T', percent: '12%', color: '#a855f7' },
    { name: 'Defense', value: '0.4T', percent: '6%', color: '#ef4444' }
  ]
};

const energyInfo = {
  consumption: '840.5K MW',
  production: '925.7K MW',
  reserve: '+85.2K MW',
  sources: [
    { name: 'Fusion', value: '512.3K MW', percent: '55%', color: '#0ea5e9' },
    { name: 'Quantum', value: '185.1K MW', percent: '20%', color: '#22c55e' },
    { name: 'Solar', value: '140.8K MW', percent: '15%', color: '#eab308' },
    { name: 'Other', value: '87.5K MW', percent: '10%', color: '#a855f7' }
  ]
};

const militaryInfo = {
  units: '2.8M',
  ships: '342',
  power: '9.8K',
  readiness: '95%',
  forces: [
    { name: 'Army', value: '1.5M', power: '3.2K', color: '#0ea5e9' },
    { name: 'Navy', value: '520K', power: '2.5K', color: '#22c55e' },
    { name: 'Air Force', value: '430K', power: '2.8K', color: '#eab308' },
    { name: 'Space Force', value: '350K', power: '1.3K', color: '#a855f7' }
  ]
};

const Header: React.FC<HeaderProps> = ({ gameTime }) => {
  // State for hover panels
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [panelPosition, setPanelPosition] = useState({ x: 0, y: 0 });
  
  // Random scanner height for animation
  const [scannerHeight, setScannerHeight] = useState<number>(
    Math.floor(Math.random() * 80) + 10
  );
  
  // Update scanner height every interval
  React.useEffect(() => {
    const interval = setInterval(() => {
      setScannerHeight(Math.floor(Math.random() * 80) + 10);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Tạo portal cho các panel
  const renderPortal = () => {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
        {activePanel === 'population' && (
          <div 
            className="header-hover-panel" 
            style={{ position: 'absolute', top: `${panelPosition.y}px`, left: `${panelPosition.x - 175}px` }}
            onMouseEnter={() => setActivePanel('population')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="panel-header">
              <div className="panel-title">Thông tin Dân số</div>
              <div className="panel-subtitle">Chi tiết số liệu</div>
            </div>
            
            <div className="panel-content">
              <div className="panel-stats">
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Tổng dân số</div>
                  <div className="panel-stat-value text-blue">{populationInfo.total}</div>
                </div>
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Tăng trưởng</div>
                  <div className="panel-stat-value text-green">{populationInfo.growth}</div>
                </div>
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Chỉ số hạnh phúc</div>
                  <div className="panel-stat-value text-yellow">{populationInfo.happiness}</div>
                </div>
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Lực lượng lao động</div>
                  <div className="panel-stat-value text-blue">{populationInfo.workforce}</div>
                </div>
              </div>
              
              <div className="panel-divider"></div>
              
              <div className="panel-categories">
                <div className="panel-categories-title">Phân loại dân số</div>
                {populationInfo.categories.map((category, index) => (
                  <div className="panel-category" key={index}>
                    <div className="panel-category-name">{category.name}</div>
                    <div className="panel-category-bar-container">
                      <div className="panel-category-bar" style={{ 
                        width: `${parseInt(category.value) / parseInt(populationInfo.total) * 100}%`,
                        backgroundColor: category.color 
                      }}></div>
                    </div>
                    <div className="panel-category-value" style={{ color: category.color }}>{category.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activePanel === 'gdp' && (
          <div 
            className="header-hover-panel" 
            style={{ position: 'absolute', top: `${panelPosition.y}px`, left: `${panelPosition.x - 175}px` }}
            onMouseEnter={() => setActivePanel('gdp')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="panel-header">
              <div className="panel-title">Chỉ số Kinh tế</div>
              <div className="panel-subtitle">Tổng quan GDP</div>
            </div>
            
            <div className="panel-content">
              <div className="panel-stats">
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Tổng GDP</div>
                  <div className="panel-stat-value text-green">{gdpInfo.total}</div>
                </div>
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Tăng trưởng</div>
                  <div className="panel-stat-value text-green">{gdpInfo.growth}</div>
                </div>
              </div>
              
              <div className="panel-divider"></div>
              
              <div className="panel-sectors">
                <div className="panel-sectors-title">Các lĩnh vực kinh tế</div>
                <div className="panel-pie-chart">
                  <div className="pie-segments">
                    {gdpInfo.sectors.map((sector, index) => {
                      const rotation = index === 0 ? 0 : 
                        gdpInfo.sectors.slice(0, index).reduce((sum, s) => 
                          sum + (parseInt(s.percent) / 100) * 360, 0);
                      return (
                        <div 
                          key={index}
                          className="pie-segment"
                          style={{ 
                            backgroundColor: sector.color,
                            transform: `rotate(${rotation}deg)`,
                            clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(Math.PI * parseInt(sector.percent) / 50)}% ${50 - 50 * Math.sin(Math.PI * parseInt(sector.percent) / 50)}%, 50% 50%)`
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="panel-sectors-legend">
                  {gdpInfo.sectors.map((sector, index) => (
                    <div className="panel-sector-item" key={index}>
                      <div className="panel-sector-color" style={{ backgroundColor: sector.color }}></div>
                      <div className="panel-sector-name">{sector.name}</div>
                      <div className="panel-sector-value">{sector.value}</div>
                      <div className="panel-sector-percent">{sector.percent}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activePanel === 'energy' && (
          <div 
            className="header-hover-panel" 
            style={{ position: 'absolute', top: `${panelPosition.y}px`, left: `${panelPosition.x - 175}px` }}
            onMouseEnter={() => setActivePanel('energy')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="panel-header">
              <div className="panel-title">Thông tin Năng lượng</div>
              <div className="panel-subtitle">Sản xuất & Tiêu thụ</div>
            </div>
            
            <div className="panel-content">
              <div className="panel-stats">
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Sản xuất</div>
                  <div className="panel-stat-value text-green">{energyInfo.production}</div>
                </div>
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Tiêu thụ</div>
                  <div className="panel-stat-value text-yellow">{energyInfo.consumption}</div>
                </div>
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Dự trữ</div>
                  <div className="panel-stat-value text-blue">{energyInfo.reserve}</div>
                </div>
              </div>
              
              <div className="panel-divider"></div>
              
              <div className="panel-energy-sources">
                <div className="panel-energy-title">Nguồn năng lượng</div>
                {energyInfo.sources.map((source, index) => (
                  <div className="panel-energy-item" key={index}>
                    <div className="panel-energy-info">
                      <div className="panel-energy-name">{source.name}</div>
                      <div className="panel-energy-value" style={{ color: source.color }}>
                        {source.value} <span className="panel-energy-percent">({source.percent})</span>
                      </div>
                    </div>
                    <div className="panel-energy-bar-container">
                      <div 
                        className="panel-energy-bar-fill" 
                        style={{ 
                          width: source.percent,
                          backgroundColor: source.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="panel-footer">
              <div className="panel-footer-stat">
                <div className="panel-footer-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="panel-footer-text">Hiệu suất: <span className="text-green">98.7%</span></div>
              </div>
            </div>
          </div>
        )}
        
        {activePanel === 'military' && (
          <div 
            className="header-hover-panel" 
            style={{ position: 'absolute', top: `${panelPosition.y}px`, left: `${panelPosition.x - 175}px` }}
            onMouseEnter={() => setActivePanel('military')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="panel-header">
              <div className="panel-title">Lực lượng Quân sự</div>
              <div className="panel-subtitle">Chi tiết binh chủng</div>
            </div>
            
            <div className="panel-content">
              <div className="panel-stats">
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Tổng quân</div>
                  <div className="panel-stat-value text-red">{militaryInfo.units}</div>
                </div>
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Số tàu</div>
                  <div className="panel-stat-value text-blue">{militaryInfo.ships}</div>
                </div>
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Sức mạnh</div>
                  <div className="panel-stat-value text-red">{militaryInfo.power}</div>
                </div>
                <div className="panel-stat-item">
                  <div className="panel-stat-label">Sẵn sàng</div>
                  <div className="panel-stat-value text-green">{militaryInfo.readiness}</div>
                </div>
              </div>
              
              <div className="panel-divider"></div>
              
              <div className="panel-military-forces">
                <div className="panel-military-title">Các lực lượng</div>
                
                <div className="panel-military-grid">
                  {militaryInfo.forces.map((force, index) => (
                    <div className="panel-military-card" key={index}>
                      <div className="panel-military-card-header" style={{ backgroundColor: force.color }}>
                        {force.name}
                      </div>
                      <div className="panel-military-card-content">
                        <div className="panel-military-units">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                          <span>{force.value}</span>
                        </div>
                        <div className="panel-military-power">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                          </svg>
                          <span>{force.power}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="panel-radar">
              <div className="panel-radar-sweep"></div>
              <div className="panel-radar-dot" style={{ top: '30%', left: '70%' }}></div>
              <div className="panel-radar-dot" style={{ top: '50%', left: '20%' }}></div>
              <div className="panel-radar-dot" style={{ top: '70%', left: '40%' }}></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {activePanel && renderPortal()}
      <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <span className="header-prefix">  </span>
          <h1 className="header-title">NOVA EMPIRE</h1>
        </div>

      </div>
      
      <div className="header-stats">
          <div 
            className={`header-stat header-stat-population ${activePanel === 'population' ? 'active' : ''}`}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setPanelPosition({ 
                x: rect.left + rect.width/2, 
                y: rect.bottom + window.scrollY
              });
              setActivePanel('population');
            }}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="header-stat-highlight"></div>
            <span className="header-stat-label">Dân số</span>
            <div className="header-stat-value-container">
              <span className="header-stat-value">125.4M</span>
              <div className="header-stat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            
          </div>
          
          <div 
            className={`header-stat header-stat-gdp ${activePanel === 'gdp' ? 'active' : ''}`}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setPanelPosition({ 
                x: rect.left + rect.width/2, 
                y: rect.bottom + window.scrollY
              });
              setActivePanel('gdp');
            }}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="header-stat-highlight"></div>
            <span className="header-stat-label">GDP</span>
            <div className="header-stat-value-container">
              <span className="header-stat-value">7.2T</span>
              <div className="header-stat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
            </div>
            
          </div>
          
          <div 
            className={`header-stat header-stat-energy ${activePanel === 'energy' ? 'active' : ''}`}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setPanelPosition({ 
                x: rect.left + rect.width/2, 
                y: rect.bottom + window.scrollY
              });
              setActivePanel('energy');
            }}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="header-stat-highlight"></div>
            <span className="header-stat-label">Năng lượng</span>
            <div className="header-stat-value-container">
              <span className="header-stat-value">840.5K</span>
              <div className="header-stat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
            </div>
            
          </div>
          
          <div 
            className={`header-stat header-stat-military ${activePanel === 'military' ? 'active' : ''}`}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setPanelPosition({ 
                x: rect.left + rect.width/2, 
                y: rect.bottom + window.scrollY
              });
              setActivePanel('military');
            }}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="header-stat-highlight"></div>
            <span className="header-stat-label">Lực lượng</span>
            <div className="header-stat-value-container">
              <span className="header-stat-value">2.8M</span>
              <div className="header-stat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
            </div>
            
          </div>
        </div>
      <div className="header-time">
        <div className="header-time-decoration"></div>
        <span className="header-time-label">SYS.TIME</span>
        <span className="header-time-value">
          {`${gameTime.year}.${gameTime.month.toString().padStart(2, '0')}.${gameTime.day.toString().padStart(2, '0')}`}
        </span>
        <div className="header-time-pulse"></div>
        <div className="header-time-dots">
          <div className="header-time-dot"></div>
          <div className="header-time-dot"></div>
          <div className="header-time-dot"></div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;