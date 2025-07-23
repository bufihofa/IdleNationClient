import React, { useState, useEffect } from 'react';
import { 
  HUDHeader, 
  HUDPanel, 
  HUDCard, 
  HUDMeter, 
  HUDVerticalProgress,
  HUDRadar,
  HUDConnector,
  HUDStreaming,
  HUDDialog,
  HUDPosition,
  HUDNotification,
  useHUDNotifications,
  ScanLineEffect
} from '../common/HUDComponents';
import { SciFiButton } from '../common/UIComponents';

const HUDDemoView: React.FC = () => {
  // State for progress values with animation
  const [meterValues, setMeterValues] = useState({
    energy: 75,
    defense: 50,
    economy: 25,
  });

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogStyle, setDialogStyle] = useState<1 | 2 | 3>(1);
  
  // Radar dots
  const radarDots = [
    { x: 75, y: 25, label: '01' },
    { x: 30, y: 65, label: '02' },
    { x: 45, y: 40, label: '03' }
  ];
  
  // Streaming cells
  const streamingCells = [
    { 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ), 
      label: 'STATUS' 
    },
    { 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ), 
      label: 'METRICS' 
    },
    { 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ), 
      label: 'HELP' 
    },
    { 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ), 
      label: 'SECURITY' 
    }
  ];

  // Notifications
  const { addNotification, HUDNotificationsContainer } = useHUDNotifications();
  
  // Animate meter values
  useEffect(() => {
    const timer = setInterval(() => {
      setMeterValues({
        energy: Math.floor(65 + Math.random() * 20),
        defense: Math.floor(40 + Math.random() * 20),
        economy: Math.floor(20 + Math.random() * 20),
      });
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="section-header">
        <div className="section-title-container">
          <h2 className="section-title">
            <span className="section-title-prefix">SYS.MODULE</span>
            Cyberpunk HUD Elements
            <div className="section-title-pulse"></div>
          </h2>
        </div>
        <div className="section-header-line"></div>
      </div>
      
      {/* Headers Section */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            Header Styles
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem' }}>
          <HUDHeader 
            title="YOUR NAME" 
            subtitle="Add description here" 
            style={1} 
            color="cyan" 
          />
          
          <HUDHeader 
            title="YOUR NAME" 
            subtitle="Add description here" 
            style={2} 
            color="blue" 
          />
          
          <HUDHeader 
            title="YOUR NAME" 
            subtitle="Add description here" 
            style={3} 
            color="yellow" 
          />
          
          <HUDHeader 
            title="YOUR NAME" 
            subtitle="Add description here" 
            style={4} 
            color="red" 
          />
        </div>
      </div>
      
      {/* Panels Section */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <rect x="7" y="7" width="3" height="9"></rect>
                <rect x="14" y="7" width="3" height="5"></rect>
              </svg>
            </div>
            Panel Styles
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', padding: '1rem' }}>
            <HUDPanel style={1} color="cyan">
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                Panel Style 1 - Cyan
              </div>
            </HUDPanel>
          
            <HUDPanel style={2} color="blue">
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                Panel Style 2 - Blue
              </div>
            </HUDPanel>
          
            <HUDPanel style={3} color="yellow">
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                Panel Style 3 - Yellow
              </div>
            </HUDPanel>
          
            <HUDPanel style={4} color="red">
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                Panel Style 4 - Red
              </div>
            </HUDPanel>
          
            <HUDPanel style={1} label="LABELED PANEL" color="purple">
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                Panel with Top Label - Purple
              </div>
            </HUDPanel>
        </div>
      </div>
      
      {/* Cards Section */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            Card Themes
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', padding: '1rem' }}>
          <HUDCard title="CYAN" footer="#33EEFF" color="cyan" style={1}>
            <div style={{ height: '150px' }}></div>
          </HUDCard>
          
          <HUDCard title="CIRCUIT" footer="#FFDE76" color="yellow" style={1}>
            <div style={{ height: '150px' }}></div>
          </HUDCard>
          
          <HUDCard title="COPPER" footer="#FFDE76" color="copper" style={1}>
            <div style={{ height: '150px' }}></div>
          </HUDCard>
          
          <HUDCard title="CYBERVOID" footer="#9C2AF2" color="purple" style={1}>
            <div style={{ height: '150px' }}></div>
          </HUDCard>
        </div>
      </div>
      
      {/* Progress Indicators Section */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            Progress Indicators
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', padding: '1rem' }}>
            <HUDMeter 
              value={20} 
              label="METER" 
              style={1} 
              color="cyan" 
            />
          
            <HUDMeter 
              value={75} 
              label="METER" 
              style={1} 
              color="blue" 
            />
          
            <HUDMeter 
              value={50} 
              label="METER" 
              style={3} 
              color="yellow" 
            />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1rem', flexWrap: 'wrap' }}>
          <HUDVerticalProgress 
            value={25} 
            label="A" 
            style={1} 
            color="cyan" 
          />
          
          <HUDVerticalProgress 
            value={75} 
            label="B" 
            style={2} 
            color="blue" 
          />
          
          <HUDVerticalProgress 
            value={50} 
            label="C" 
            style={3} 
            color="yellow" 
          />
        </div>
      </div>
      
      {/* Advanced UI Elements */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            Advanced UI Elements
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', padding: '1rem' }}>
          <div>
            <h4 style={{ color: 'var(--color-accent-cyan)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>RADAR</h4>
            <HUDRadar dots={radarDots} color="cyan" />
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-accent-cyan)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>CONNECTORS</h4>
            <div style={{ position: 'relative', height: '200px', padding: '2rem' }}>
              <HUDConnector 
                type="horizontal" 
                length={150} 
                color="cyan" 
                style={{ position: 'absolute', top: '30px', left: '20px' }} 
              />
              
              <HUDConnector 
                type="vertical" 
                length={100} 
                color="blue" 
                style={{ position: 'absolute', top: '70px', left: '100px' }} 
              />
              
              <HUDConnector 
                type="l-shape" 
                length={80} 
                verticalLength={60} 
                color="red" 
                style={{ position: 'absolute', top: '120px', left: '20px' }} 
              />
            </div>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-accent-cyan)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>POSITION MARKERS</h4>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              <HUDPosition label="01" color="cyan" />
              <HUDPosition label="02" color="blue" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Streaming Screens & Dialogs */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            Streaming Screens & Dialogs
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ padding: '1rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <HUDStreaming 
              title="STREAMING SCREEN" 
              cells={streamingCells}
              metricValue="12567"
              metricUnit="UNITS" 
              color="cyan"
              status="ONLINE"
            >
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <ScanLineEffect>
                  <div style={{ 
                    width: '100%', 
                    height: '150px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid rgba(15, 244, 254, 0.3)',
                    background: 'rgba(0, 30, 60, 0.2)'
                  }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1" style={{ color: 'var(--color-accent-cyan)' }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                </ScanLineEffect>
              </div>
            </HUDStreaming>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div>
              <HUDDialog 
                title="DIALOG WINDOW" 
                isOpen={true}
                onClose={() => {}}
                style={1} 
                color="cyan"
              >
                <div style={{ padding: '1rem', minHeight: '100px', textAlign: 'center' }}>
                  This is a sci-fi window popup 001
                  <p style={{ color: 'var(--color-accent-yellow)', marginTop: '0.5rem' }}>(More style options for you!)</p>
                </div>
              </HUDDialog>
            </div>
            
            <div>
              <HUDDialog 
                title="DIALOG WINDOW" 
                isOpen={true}
                onClose={() => {}}
                style={2} 
                color="blue"
              >
                <div style={{ padding: '1rem', minHeight: '100px', textAlign: 'center' }}>
                  This is a sci-fi window popup 002
                  <p style={{ color: 'var(--color-accent-yellow)', marginTop: '0.5rem' }}>(More style options for you!)</p>
                </div>
              </HUDDialog>
            </div>
            
            <div>
              <HUDDialog 
                title="DIALOG WINDOW" 
                isOpen={true}
                onClose={() => {}}
                style={3} 
                color="cyan"
              >
                <div style={{ padding: '1rem', minHeight: '100px', textAlign: 'center' }}>
                  This is a sci-fi window popup 003
                  <p style={{ color: 'var(--color-accent-yellow)', marginTop: '0.5rem' }}>(More style options for you!)</p>
                </div>
              </HUDDialog>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notifications Section */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            Notifications
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p>Click buttons below to display different notification types:</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <SciFiButton 
              variant="primary" 
              onClick={() => addNotification({
                title: 'Information',
                message: 'This is an information notification with important system update details.',
                type: 'info',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                )
              })}
            >
              Info Notification
            </SciFiButton>
            
            <SciFiButton 
              variant="success" 
              onClick={() => addNotification({
                title: 'Success',
                message: 'Operation has been completed successfully!',
                type: 'success',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                )
              })}
            >
              Success Notification
            </SciFiButton>
            
            <SciFiButton 
              variant="warning" 
              onClick={() => addNotification({
                title: 'Warning',
                message: 'System resources running low. Consider optimizing operations.',
                type: 'warning',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                )
              })}
            >
              Warning Notification
            </SciFiButton>
            
            <SciFiButton 
              variant="danger" 
              onClick={() => addNotification({
                title: 'Error',
                message: 'Critical system failure detected! Immediate attention required.',
                type: 'error',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                )
              })}
            >
              Error Notification
            </SciFiButton>
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <HUDNotification 
              title="Notification Example" 
              message="This is a fixed example of how notifications appear in the interface." 
              type="info"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              }
              onClose={() => {}}
              autoClose={false}
            />
          </div>
        </div>
      </div>
      
      {/* Interactive Dialog Demo */}
      <div className="card">
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            Interactive Dialog Demo
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p>Click the button below to open an interactive dialog:</p>
          
          <div>
            <SciFiButton 
              variant="primary" 
              onClick={() => {
                setDialogStyle(1);
                setDialogOpen(true);
              }}
            >
              Open Dialog Style 1
            </SciFiButton>
            
            <div style={{ display: 'inline-block', marginLeft: '1rem' }}>
              <SciFiButton 
                variant="primary" 
                onClick={() => {
                  setDialogStyle(2);
                  setDialogOpen(true);
                }}
              >
                Open Dialog Style 2
              </SciFiButton>
            </div>
            
            <div style={{ display: 'inline-block', marginLeft: '1rem' }}>
              <SciFiButton 
                variant="primary" 
                onClick={() => {
                  setDialogStyle(3);
                  setDialogOpen(true);
                }}
              >
                Open Dialog Style 3
              </SciFiButton>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notifications Container */}
      <HUDNotificationsContainer />
      
      {/* Interactive Dialog */}
      {dialogOpen && (
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 10, 20, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{ width: '500px', maxWidth: '90%' }}>
            <HUDDialog 
              title="Interactive Dialog" 
              isOpen={true}
              onClose={() => setDialogOpen(false)}
              style={dialogStyle} 
              color="cyan"
              footer={
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                  <SciFiButton 
                    variant="secondary" 
                    onClick={() => setDialogOpen(false)}
                  >
                    CANCEL
                  </SciFiButton>
                  <SciFiButton 
                    variant="primary" 
                    onClick={() => {
                      setDialogOpen(false);
                      addNotification({
                        title: 'Action Confirmed',
                        message: 'You have confirmed the action successfully.',
                        type: 'success',
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        )
                      });
                    }}
                  >
                    CONFIRM
                  </SciFiButton>
                </div>
              }
            >
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <p>This is an interactive dialog that can be closed by clicking the buttons below or the X in the corner.</p>
                <p style={{ marginTop: '1rem' }}>Current Style: <span style={{ color: 'var(--color-accent-cyan)' }}>Style {dialogStyle}</span></p>
                <p style={{ color: 'var(--color-accent-yellow)', marginTop: '1rem' }}>(Animation and interactive elements included!)</p>
              </div>
            </HUDDialog>
          </div>
        </div>
      )}
    </>
  );
};

export default HUDDemoView;