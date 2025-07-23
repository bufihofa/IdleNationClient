import React, { useState } from 'react';
import { 
  SciFiRadio, 
  SciFiCheckbox, 
  SciFiSwitch, 
  SciFiSlider, 
  SciFiButton, 
  SciFiDropdown,
  SciFiNotification,
  SciFiDialog,
  SciFiPanel,
  SciFiMiniMap,
  SciFiProgressBar,
  SciFiAvatarDisplay
} from '../common/UIComponents';

const UIDemoView: React.FC = () => {
  // State for form controls
  const [radioValue, setRadioValue] = useState('radio_on');
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [switchValue, setSwitchValue] = useState(true);
  const [sliderValue, setSliderValue] = useState(60);
  const [dropdownValue, setDropdownValue] = useState('option_001');
  
  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<'v1' | 'v2' | 'v3' | 'v4'>('v1');
  
  // Notification state
  const [showNotification, setShowNotification] = useState<string | null>(null);
  
  // Progress values
  const [progressValue, setProgressValue] = useState(75);
  
  // Options for dropdown
  const dropdownOptions = [
    { value: 'option_001', label: 'Option_001' },
    { value: 'option_002', label: 'Option_002' },
    { value: 'option_003', label: 'Option_003' },
    { value: 'option_004', label: 'Option_004' },
  ];
  
  // Function to show notification temporarily
  const displayNotification = (type: string) => {
    setShowNotification(type);
    setTimeout(() => setShowNotification(null), 3000);
  };
  
  // Function to open dialog
  const openDialog = (type: 'v1' | 'v2' | 'v3' | 'v4') => {
    setDialogType(type);
    setDialogOpen(true);
  };

  return (
    <>
      <div className="section-header">
        <div className="section-title-container">
          <h2 className="section-title">
            <span className="section-title-prefix">SYS.MODULE</span>
            UI Components Demo
            <div className="section-title-pulse"></div>
          </h2>
        </div>
        <div className="section-header-line"></div>
      </div>
      
      <div className="card-scanner"></div>
      
      {/* Control Panel Section */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="9" x2="15" y2="15" />
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </div>
            Control Panel Elements
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Radio buttons */}
          <div>
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Radio:</h4>
            <div className="ui-demo-group">
              <SciFiRadio 
                name="radioOption" 
                value="radio_on" 
                label="Radio_on" 
                checked={radioValue === 'radio_on'} 
                onChange={(e) => setRadioValue(e.target.value)} 
              />
              <SciFiRadio 
                name="radioOption" 
                value="radio_off" 
                label="Radio_off" 
                checked={radioValue === 'radio_off'} 
                onChange={(e) => setRadioValue(e.target.value)} 
              />
            </div>
          </div>
          
          {/* Checkboxes */}
          <div>
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Check box:</h4>
            <div className="ui-demo-group">
              <SciFiCheckbox 
                name="checkOption" 
                label="Check box_on" 
                checked={checkboxValue} 
                onChange={(e) => setCheckboxValue(e.target.checked)} 
              />
              <SciFiCheckbox 
                name="checkOptionOff" 
                label="Check box_off" 
                checked={!checkboxValue} 
                onChange={(e) => setCheckboxValue(!e.target.checked)} 
              />
            </div>
          </div>
          
          {/* Switches */}
          <div>
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Switch:</h4>
            <div className="ui-demo-group">
              <SciFiSwitch 
                name="switchOption" 
                label="Switch_on" 
                checked={switchValue} 
                onChange={(e) => setSwitchValue(e.target.checked)} 
              />
              <SciFiSwitch 
                name="switchOptionOff" 
                label="Switch_off" 
                checked={!switchValue} 
                onChange={(e) => setSwitchValue(!e.target.checked)} 
              />
            </div>
          </div>
          
          {/* Sliders */}
          <div>
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Slider:</h4>
            <div className="ui-demo-group" style={{ paddingRight: '1rem' }}>
              <SciFiSlider 
                min={0} 
                max={100} 
                value={sliderValue} 
                onChange={setSliderValue} 
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '0.5rem', color: 'var(--color-text-secondary)' }}>
              Value: <span className="text-accent-blue">{sliderValue}</span>
            </div>
          </div>
          
          {/* Dropdown */}
          <div>
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Dropdown:</h4>
            <div className="ui-demo-group">
              <SciFiDropdown 
                options={dropdownOptions} 
                value={dropdownValue} 
                onChange={setDropdownValue}
                placeholder="Select an option" 
              />
            </div>
          </div>
          
          {/* Progress bar */}
          <div>
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Progress Bar:</h4>
            <div className="ui-demo-group">
              <div style={{ marginBottom: '0.75rem' }}>
                <SciFiProgressBar 
                  value={progressValue} 
                  max={100} 
                  color="blue" 
                  label="Blue Progress" 
                />
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <SciFiProgressBar 
                  value={progressValue - 10} 
                  max={100} 
                  color="green" 
                  label="Green Progress" 
                />
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <SciFiProgressBar 
                  value={progressValue - 20} 
                  max={100} 
                  color="red" 
                  label="Red Progress" 
                />
              </div>
              <div>
                <SciFiProgressBar 
                  value={progressValue - 30} 
                  max={100} 
                  color="yellow" 
                  label="Yellow Progress" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Buttons Section */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            Button Types
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div>
          <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Button Variants:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <SciFiButton variant="primary">Primary</SciFiButton>
            <SciFiButton variant="secondary">Secondary</SciFiButton>
            <SciFiButton variant="success">Success</SciFiButton>
            <SciFiButton variant="danger">Danger</SciFiButton>
            <SciFiButton variant="warning">Warning</SciFiButton>
          </div>
          
          <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Button Sizes:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
            <SciFiButton variant="primary" size="sm">Small</SciFiButton>
            <SciFiButton variant="primary" size="md">Medium</SciFiButton>
            <SciFiButton variant="primary" size="lg">Large</SciFiButton>
          </div>
          
          <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Button Shapes:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <SciFiButton variant="primary" shape="default">Default</SciFiButton>
            <SciFiButton variant="primary" shape="rounded">Rounded</SciFiButton>
            <SciFiButton variant="primary" shape="hexagon">Hexagon</SciFiButton>
          </div>
        </div>
      </div>
      
      {/* Notifications & Dialogs */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            Notifications & Dialogs
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Notifications */}
          <div>
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Positive Notifications:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <SciFiButton variant="success" onClick={() => displayNotification('complete')}>COMPLETE!</SciFiButton>
              <SciFiButton variant="success" onClick={() => displayNotification('win')}>YOU WIN!</SciFiButton>
              <SciFiButton variant="success" onClick={() => displayNotification('victory')}>VICTORY!</SciFiButton>
              <SciFiButton variant="success" onClick={() => displayNotification('perfect')}>PERFECT!</SciFiButton>
              <SciFiButton variant="success" onClick={() => displayNotification('levelup')}>LEVEL UP!</SciFiButton>
            </div>
            
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Negative Notifications:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <SciFiButton variant="danger" onClick={() => displayNotification('gameover')}>GAME OVER!</SciFiButton>
              <SciFiButton variant="danger" onClick={() => displayNotification('defeat')}>DEFEAT!</SciFiButton>
              <SciFiButton variant="danger" onClick={() => displayNotification('fail')}>YOU FAILED!</SciFiButton>
            </div>
          </div>
          
          {/* Dialogs */}
          <div>
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Dialog Styles:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <SciFiButton variant="primary" onClick={() => openDialog('v1')}>Dialog Style 1</SciFiButton>
              <SciFiButton variant="primary" onClick={() => openDialog('v2')}>Dialog Style 2</SciFiButton>
              <SciFiButton variant="primary" onClick={() => openDialog('v3')}>Dialog Style 3</SciFiButton>
              <SciFiButton variant="primary" onClick={() => openDialog('v4')}>Dialog Style 4</SciFiButton>
            </div>
          </div>
        </div>
      </div>
      
      {/* Panels & Special Elements */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <rect x="7" y="7" width="3" height="9" />
                <rect x="14" y="7" width="3" height="5" />
              </svg>
            </div>
            Panels & Special Elements
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Panels */}
          <div>
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Panel Variants:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <SciFiPanel title="DEFAULT PANEL" variant="default">
                <p>Standard panel content goes here</p>
              </SciFiPanel>
              
              <SciFiPanel title="BLUE PANEL" variant="blue">
                <p>Blue panel with special styling</p>
              </SciFiPanel>
              
              <SciFiPanel title="GREEN PANEL" variant="green">
                <p>Green panel for success information</p>
              </SciFiPanel>
              
              <SciFiPanel title="RED PANEL" variant="red">
                <p>Red panel for warnings and errors</p>
              </SciFiPanel>
            </div>
          </div>
          
          {/* Avatar & Mini Map */}
          <div>
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Avatar Display:</h4>
            <div style={{ marginBottom: '1.5rem' }}>
              <SciFiAvatarDisplay 
                name="Commander Nova"
                level={12}
                health={80}
                maxHealth={100}
                energy={67}
                maxEnergy={100}
              />
            </div>
            
            <h4 className="text-accent-cyan glow-cyan" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Mini Map:</h4>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SciFiMiniMap />
            </div>
          </div>
        </div>
      </div>
      
      {/* Number Indicators */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="9" x2="20" y2="9" />
                <line x1="4" y1="15" x2="20" y2="15" />
                <line x1="10" y1="3" x2="8" y2="21" />
                <line x1="16" y1="3" x2="14" y2="21" />
              </svg>
            </div>
            Number Indicators
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="sci-fi-number">0</div>
          <div className="sci-fi-number">1</div>
          <div className="sci-fi-number">2</div>
          <div className="sci-fi-number">3</div>
          <div className="sci-fi-number">4</div>
          <div className="sci-fi-number">5</div>
          <div className="sci-fi-number">6</div>
          <div className="sci-fi-number">7</div>
          <div className="sci-fi-number">8</div>
          <div className="sci-fi-number">9</div>
        </div>
      </div>
      
      {/* Game Action Buttons */}
      <div className="card">
        <div className="card-corner card-corner-tl"></div>
        <div className="card-corner card-corner-tr"></div>
        <div className="card-corner card-corner-bl"></div>
        <div className="card-corner card-corner-br"></div>
        <div className="card-scanner"></div>
        
        <div className="card-header">
          <h3 className="card-title">
            <div className="card-title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16l4-4-4-4" />
                <path d="M8 12h8" />
              </svg>
            </div>
            Game Action Buttons
          </h3>
          <div className="card-header-line"></div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', padding: '1rem' }}>
          <div className="sci-fi-action-button sci-fi-action-button-green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          
          <div className="sci-fi-action-button sci-fi-action-button-red">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          
          <div className="sci-fi-action-button sci-fi-action-button-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          
          <div className="sci-fi-action-button sci-fi-action-button-yellow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', padding: '1rem' }}>
          <div className="sci-fi-circle-button">
            <div className="sci-fi-circle-button-inner">
              <div className="sci-fi-circle-button-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="sci-fi-circle-button sci-fi-circle-button-yellow">
            <div className="sci-fi-circle-button-inner">
              <div className="sci-fi-circle-button-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="sci-fi-circle-button sci-fi-circle-button-cyan">
            <div className="sci-fi-circle-button-inner">
              <div className="sci-fi-circle-button-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="sci-fi-start-button-container">
          <div className="sci-fi-start-button">
            <div className="sci-fi-start-button-arrow">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          <div className="sci-fi-start-label">START!</div>
        </div>
      </div>
      
      {/* Notification display */}
      {showNotification && (
        <SciFiNotification 
          type={showNotification as 'complete' | 'victory' | 'win' | 'perfect' | 'levelup' | 'gameover' | 'defeat' | 'fail'} 
        />
      )}
      
      {/* Dialog popup */}
      <SciFiDialog
        title={`Sci-Fi Window Popup ${dialogType.substring(1)}`}
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        variant={dialogType}
        actions={
          <>
            <SciFiButton 
              variant="secondary" 
              onClick={() => setDialogOpen(false)}
              shape={dialogType === 'v4' ? 'hexagon' : 'default'}
            >
              NO
            </SciFiButton>
            <SciFiButton 
              variant="primary" 
              onClick={() => setDialogOpen(false)}
              shape={dialogType === 'v4' ? 'hexagon' : 'default'}
            >
              YES
            </SciFiButton>
          </>
        }
      >
        <p>This is a sci-fi window popup {dialogType}</p>
        <p style={{ color: '#f0d100', marginTop: '0.5rem' }}>(More style options for you!)</p>
      </SciFiDialog>
    </>
  );
};

export default UIDemoView;