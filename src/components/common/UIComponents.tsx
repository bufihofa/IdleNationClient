import React, { useState } from 'react';

/**
 * Radio Button component with sci-fi style
 */
interface RadioProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SciFiRadio: React.FC<RadioProps> = ({ name, value, label, checked, onChange }) => {
  return (
    <label className="sci-fi-radio">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sci-fi-radio-input"
      />
      <span className="sci-fi-radio-custom"></span>
      <span className="sci-fi-radio-label">{label}</span>
    </label>
  );
};

/**
 * Checkbox component with sci-fi style
 */
interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SciFiCheckbox: React.FC<CheckboxProps> = ({ name, label, checked, onChange }) => {
  return (
    <label className="sci-fi-checkbox">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sci-fi-checkbox-input"
      />
      <span className="sci-fi-checkbox-custom">
        <svg viewBox="0 0 24 24" className="sci-fi-checkbox-icon">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span className="sci-fi-checkbox-label">{label}</span>
    </label>
  );
};

/**
 * Switch component with sci-fi style
 */
interface SwitchProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SciFiSwitch: React.FC<SwitchProps> = ({ name, label, checked, onChange }) => {
  return (
    <label className="sci-fi-switch">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sci-fi-switch-input"
      />
      <span className="sci-fi-switch-custom">
        <span className="sci-fi-switch-track"></span>
        <span className="sci-fi-switch-thumb"></span>
        <span className="sci-fi-switch-on">ON</span>
        <span className="sci-fi-switch-off">OFF</span>
      </span>
      <span className="sci-fi-switch-label">{label}</span>
    </label>
  );
};

/**
 * Slider component with sci-fi style
 */
interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export const SciFiSlider: React.FC<SliderProps> = ({ min, max, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value));
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="sci-fi-slider">
      <span className="sci-fi-slider-minus">−</span>
      <div className="sci-fi-slider-container">
        <div className="sci-fi-slider-track">
          <div 
            className="sci-fi-slider-fill" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="sci-fi-slider-input"
        />
        <div 
          className="sci-fi-slider-thumb" 
          style={{ left: `${percentage}%` }}
        ></div>
      </div>
      <span className="sci-fi-slider-plus">+</span>
    </div>
  );
};

/**
 * Button component with sci-fi style
 */
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'default' | 'rounded' | 'hexagon';
  onClick?: () => void;
}

export const SciFiButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  shape = 'default',
  onClick 
}) => {
  return (
    <button 
      className={`sci-fi-button sci-fi-button-${variant} sci-fi-button-${size} sci-fi-button-${shape}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

/**
 * Dropdown select component with sci-fi style
 */
interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SciFiDropdown: React.FC<DropdownProps> = ({ 
  options, 
  value, 
  onChange,
  placeholder = 'Select option'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: DropdownOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="sci-fi-dropdown">
      <div 
        className={`sci-fi-dropdown-header ${isOpen ? 'sci-fi-dropdown-header-open' : ''}`} 
        onClick={handleToggle}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg 
          className="sci-fi-dropdown-arrow" 
          width="12" height="8" 
          viewBox="0 0 12 8" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M1 1L6 6L11 1" />
        </svg>
      </div>
      {isOpen && (
        <div className="sci-fi-dropdown-options">
          {options.map(option => (
            <div 
              key={option.value} 
              className={`sci-fi-dropdown-option ${option.value === value ? 'sci-fi-dropdown-option-selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      <div className="sci-fi-dropdown-corner sci-fi-dropdown-corner-tl"></div>
      <div className="sci-fi-dropdown-corner sci-fi-dropdown-corner-tr"></div>
      <div className="sci-fi-dropdown-corner sci-fi-dropdown-corner-bl"></div>
      <div className="sci-fi-dropdown-corner sci-fi-dropdown-corner-br"></div>
    </div>
  );
};

/**
 * Notification display with different styles
 */
interface NotificationProps {
  type: 'complete' | 'victory' | 'win' | 'perfect' | 'levelup' | 'gameover' | 'defeat' | 'fail';
  visible?: boolean;
}

export const SciFiNotification: React.FC<NotificationProps> = ({ type, visible = true }) => {
  if (!visible) return null;
  
  const messages: Record<string, string> = {
    complete: 'COMPLETE!',
    victory: 'VICTORY!',
    win: 'YOU WIN!',
    perfect: 'PERFECT!',
    levelup: 'LEVEL UP!',
    gameover: 'GAME OVER!',
    defeat: 'DEFEAT!',
    fail: 'YOU FAILED!'
  };

  return (
    <div className={`sci-fi-notification sci-fi-notification-${type}`}>
      {messages[type]}
    </div>
  );
};

/**
 * Dialog popup with sci-fi style
 */
interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  variant?: 'v1' | 'v2' | 'v3' | 'v4';
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export const SciFiDialog: React.FC<DialogProps> = ({ 
  title, 
  isOpen, 
  onClose, 
  variant = 'v1',
  children,
  actions
}) => {
  if (!isOpen) return null;

  return (
    <div className="sci-fi-dialog-overlay">
      <div className={`sci-fi-dialog sci-fi-dialog-${variant}`}>
        <div className="sci-fi-dialog-header">
          <div className="sci-fi-dialog-title">{title}</div>
          <button className="sci-fi-dialog-close" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="sci-fi-dialog-content">
          {children}
        </div>
        {actions && (
          <div className="sci-fi-dialog-actions">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Panel with customizable sci-fi style
 */
interface PanelProps {
  title?: string;
  variant?: 'default' | 'blue' | 'green' | 'red' | 'purple' | 'orange';
  children: React.ReactNode;
}

export const SciFiPanel: React.FC<PanelProps> = ({ 
  title, 
  variant = 'default',
  children
}) => {
  return (
    <div className={`sci-fi-panel sci-fi-panel-${variant}`}>
      {title && (
        <div className="sci-fi-panel-title">
          {title}
        </div>
      )}
      <div className="sci-fi-panel-content">
        {children}
      </div>
    </div>
  );
};

/**
 * Mini map component with sci-fi style
 */
export const SciFiMiniMap: React.FC = () => {
  return (
    <div className="sci-fi-minimap">
      <div className="sci-fi-minimap-container">
        <div className="sci-fi-minimap-dot sci-fi-minimap-dot-self"></div>
        <div className="sci-fi-minimap-dot sci-fi-minimap-dot-ally" style={{ top: '30%', left: '70%' }}></div>
        <div className="sci-fi-minimap-dot sci-fi-minimap-dot-enemy" style={{ top: '65%', left: '25%' }}></div>
        <div className="sci-fi-minimap-dot sci-fi-minimap-dot-objective" style={{ top: '20%', left: '40%' }}></div>
        <div className="sci-fi-minimap-dot sci-fi-minimap-dot-resource" style={{ top: '75%', left: '80%' }}></div>
      </div>
    </div>
  );
};

/**
 * Progress bar with sci-fi style
 */
interface ProgressBarProps {
  value: number;
  max: number;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  showText?: boolean;
  label?: string;
}

export const SciFiProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max, 
  color = 'blue',
  showText = true,
  label
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="sci-fi-progress">
      {label && <div className="sci-fi-progress-label">{label}</div>}
      <div className={`sci-fi-progress-bar sci-fi-progress-bar-${color}`}>
        <div 
          className="sci-fi-progress-fill" 
          style={{ width: `${percentage}%` }}
        >
          <div className="sci-fi-progress-shine"></div>
        </div>
        {showText && (
          <div className="sci-fi-progress-text">
            {value}/{max}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Avatar display with health and energy bars
 */
interface AvatarDisplayProps {
  name: string;
  level?: number;
  health: number;
  maxHealth: number;
  energy: number;
  maxEnergy: number;
  avatarUrl?: string;
}

export const SciFiAvatarDisplay: React.FC<AvatarDisplayProps> = ({ 
  name, 
  level = 1, 
  health, 
  maxHealth, 
  energy, 
  maxEnergy,
  avatarUrl = '/api/placeholder/64/64' 
}) => {
  return (
    <div className="sci-fi-avatar-display">
      <div className="sci-fi-avatar-container">
        <div className="sci-fi-avatar-image">
          <img src={avatarUrl} alt={name} />
          {level && (
            <div className="sci-fi-avatar-level">{level}</div>
          )}
        </div>
        <div className="sci-fi-avatar-info">
          <div className="sci-fi-avatar-name">{name}</div>
          <div className="sci-fi-avatar-bars">
            <div className="sci-fi-avatar-health-bar">
              <div 
                className="sci-fi-avatar-health-fill" 
                style={{ width: `${(health / maxHealth) * 100}%` }}
              ></div>
              <span className="sci-fi-avatar-health-text">{health}/{maxHealth}</span>
            </div>
            <div className="sci-fi-avatar-energy-bar">
              <div 
                className="sci-fi-avatar-energy-fill" 
                style={{ width: `${(energy / maxEnergy) * 100}%` }}
              ></div>
              <span className="sci-fi-avatar-energy-text">{energy}/{maxEnergy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};