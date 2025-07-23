import React, { useState, useEffect } from 'react';

/**
 * HUD Header Component
 */
interface HUDHeaderProps {
  title: string;
  subtitle?: string;
  style?: 1 | 2 | 3 | 4;
  color?: 'cyan' | 'blue' | 'yellow' | 'red' | 'purple';
  className?: string;
}

export const HUDHeader: React.FC<HUDHeaderProps> = ({
  title,
  subtitle,
  style = 1,
  color = 'cyan',
  className
}) => {
  return (
    <div className={`hud-header hud-header-style-${style} hud-header-${color} ${className || ''}`}>
      {style === 4 ? (
        <>
          <div className="hud-header-content">
            <span className="hud-header-title">{title}</span>
            {subtitle && <span className="hud-header-subtitle">{subtitle}</span>}
          </div>
          <div className="hud-header-line"></div>
        </>
      ) : (
        <>
          <span className="hud-header-title">{title}</span>
          {subtitle && <span className="hud-header-subtitle">{subtitle}</span>}
          <div className="hud-header-line"></div>
        </>
      )}
    </div>
  );
};

/**
 * HUD Panel Component
 */
interface HUDPanelProps {
  children: React.ReactNode;
  style?: 1 | 2 | 3 | 4;
  color?: 'cyan' | 'blue' | 'yellow' | 'red' | 'purple';
  label?: string;
  className?: string;
}

export const HUDPanel: React.FC<HUDPanelProps> = ({
  children,
  style = 1,
  color = 'cyan',
  label,
  className
}) => {
  return (
    <div className={`hud-panel hud-panel-style-${style} hud-panel-${color} ${label ? 'hud-panel-labeled' : ''} ${className || ''}`}>
      {label && <div className="hud-panel-label">{label}</div>}
      <div className="hud-panel-content">
        {children}
      </div>
    </div>
  );
};

/**
 * HUD Card Component
 */
interface HUDCardProps {
  title: string;
  children: React.ReactNode;
  style?: 1 | 2 | 3 | 4;
  color?: 'cyan' | 'blue' | 'yellow' | 'copper' | 'purple';
  footer?: string;
  className?: string;
}

export const HUDCard: React.FC<HUDCardProps> = ({
  title,
  children,
  style = 1,
  color = 'cyan',
  footer,
  className
}) => {
  return (
    <div className={`hud-card hud-card-style-${style} hud-card-${color} ${className || ''}`}>
      <div className="hud-card-header">{title}</div>
      <div className="hud-card-body">
        {children}
      </div>
      {footer && <div className="hud-card-footer">{footer}</div>}
    </div>
  );
};

/**
 * HUD Meter Component (Circular Progress)
 */
interface HUDMeterProps {
  value: number;
  label?: string;
  style?: 1 | 2 | 3;
  color?: 'cyan' | 'blue' | 'yellow';
  className?: string;
  startAngle?: number;
}

export const HUDMeter: React.FC<HUDMeterProps> = ({
  value,
  label,
  style = 1,
  color = 'cyan',
  className,
  startAngle = 0
}) => {
  // Generate ticks for the meter
  const renderTicks = () => {
    const ticks = [];
    for (let i = 0; i < 60; i++) {
      const angle = (i * 6) - 90; // -90 degrees to start at top
      const transform = `rotate(${angle}deg)`;
      ticks.push(
        <div 
          key={i} 
          className="hud-meter-tick" 
          style={{ transform }} 
        />
      );
    }
    return ticks;
  };

  return (
    <div 
      className={`hud-meter hud-meter-style-${style} hud-meter-${color} ${className || ''}`}
      style={{ 
        '--progress': `${value}%`,
        '--start-angle': `${startAngle}deg`
      } as React.CSSProperties}
    >
      <div className="hud-meter-ring"></div>
      <div className="hud-meter-ticks">
        {renderTicks()}
      </div>
      <div className="hud-meter-value">{value}</div>
      {label && <div className="hud-meter-label">{label}</div>}
    </div>
  );
};

/**
 * HUD Vertical Progress Component
 */
interface HUDVerticalProgressProps {
  value: number;
  max?: number;
  label?: string;
  style?: 1 | 2 | 3;
  color?: 'cyan' | 'blue' | 'yellow' | 'red';
  className?: string;
  showValue?: boolean;
}

export const HUDVerticalProgress: React.FC<HUDVerticalProgressProps> = ({
  value,
  max = 100,
  label,
  style = 1,
  color = 'cyan',
  className,
  showValue = true
}) => {
  // Generate ticks for the progress bar
  const renderTicks = () => {
    const ticks = [];
    const tickCount = 20;
    for (let i = 0; i <= tickCount; i++) {
      ticks.push(
        <div key={i} className="hud-vprogress-tick" />
      );
    }
    return ticks;
  };

  const progressPercent = (value / max) * 100;

  return (
    <div className={`hud-vprogress hud-vprogress-style-${style} hud-vprogress-${color} ${className || ''}`}>
      <div className="hud-vprogress-bar">
        <div 
          className="hud-vprogress-fill"
          style={{ '--progress': `${progressPercent}%` } as React.CSSProperties}
        ></div>
      </div>
      <div className="hud-vprogress-ticks">
        {renderTicks()}
      </div>
      {showValue && <div className="hud-vprogress-value">{value}</div>}
      {label && <div className="hud-vprogress-label">{label}</div>}
    </div>
  );
};

/**
 * HUD Radar Component
 */
interface RadarDot {
  x: number; // 0-100
  y: number; // 0-100
  label?: string;
}

interface HUDRadarProps {
  dots?: RadarDot[];
  color?: 'cyan' | 'blue';
  className?: string;
}

export const HUDRadar: React.FC<HUDRadarProps> = ({
  dots = [],
  color = 'cyan',
  className
}) => {
  return (
    <div className={`hud-radar hud-radar-${color} ${className || ''}`}>
      <div className="hud-radar-circle"></div>
      <div className="hud-radar-circle"></div>
      <div className="hud-radar-circle"></div>
      <div className="hud-radar-circle"></div>
      <div className="hud-radar-line"></div>
      <div className="hud-radar-line"></div>
      <div className="hud-radar-line"></div>
      <div className="hud-radar-line"></div>
      <div className="hud-radar-scan"></div>
      
      {dots.map((dot, index) => (
        <React.Fragment key={index}>
          <div 
            className="hud-radar-dot"
            style={{ 
              left: `${dot.x}%`,
              top: `${dot.y}%`
            }}
          ></div>
          {dot.label && (
            <div 
              className="hud-radar-label"
              style={{ 
                left: `${dot.x}%`,
                top: `${dot.y + 5}%`
              }}
            >
              {dot.label}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

/**
 * HUD Connector Component
 */
interface HUDConnectorProps {
  type: 'horizontal' | 'vertical' | 'l-shape';
  length: number;
  verticalLength?: number;
  color?: 'cyan' | 'blue' | 'red';
  showDots?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const HUDConnector: React.FC<HUDConnectorProps> = ({
  type,
  length,
  verticalLength = 50,
  color = 'cyan',
  showDots = true,
  className,
  style = {}
}) => {
  return (
    <div style={{ position: 'relative', ...style }}>
      {type === 'horizontal' && (
        <>
          <div 
            className={`hud-connector hud-connector-horizontal hud-connector-${color} ${className || ''}`}
            style={{ width: `${length}px` }}
          ></div>
          {showDots && (
            <>
              <div className={`hud-connector-dot hud-connector-dot-start hud-connector-${color}`}></div>
              <div className={`hud-connector-dot hud-connector-dot-end hud-connector-${color}`}></div>
            </>
          )}
        </>
      )}
      
      {type === 'vertical' && (
        <>
          <div 
            className={`hud-connector hud-connector-vertical hud-connector-${color} ${className || ''}`}
            style={{ height: `${length}px` }}
          ></div>
          {showDots && (
            <>
              <div 
                className={`hud-connector-dot hud-connector-${color}`}
                style={{ top: 0, left: '50%' }}
              ></div>
              <div 
                className={`hud-connector-dot hud-connector-${color}`}
                style={{ bottom: 0, left: '50%', transform: 'translateX(-50%) translateY(50%)' }}
              ></div>
            </>
          )}
        </>
      )}
      
      {type === 'l-shape' && (
        <>
          <div 
            className={`hud-connector hud-connector-horizontal hud-connector-${color} ${className || ''}`}
            style={{ width: `${length}px` }}
          ></div>
          <div 
            className={`hud-connector hud-connector-vertical hud-connector-${color} ${className || ''}`}
            style={{ 
              height: `${verticalLength}px`, 
              position: 'absolute',
              right: 0,
              top: 0
            }}
          ></div>
          {showDots && (
            <>
              <div className={`hud-connector-dot hud-connector-dot-start hud-connector-${color}`}></div>
              <div className={`hud-connector-dot hud-connector-dot-corner hud-connector-${color}`}></div>
              <div 
                className={`hud-connector-dot hud-connector-${color}`}
                style={{ 
                  right: 0, 
                  top: verticalLength,
                  transform: 'translateX(50%) translateY(0)'
                }}
              ></div>
            </>
          )}
        </>
      )}
    </div>
  );
};

/**
 * HUD Streaming Screen Component
 */
interface StreamingCell {
  icon: React.ReactNode;
  label: string;
}

interface HUDStreamingProps {
  title: string;
  cells: StreamingCell[];
  metricValue?: string;
  metricUnit?: string;
  status?: string;
  color?: 'cyan' | 'blue';
  className?: string;
  children?: React.ReactNode;
}

export const HUDStreaming: React.FC<HUDStreamingProps> = ({
  title,
  cells,
  metricValue,
  metricUnit,
  status = 'ONLINE',
  color = 'cyan',
  className,
  children
}) => {
  return (
    <div className={`hud-streaming hud-streaming-${color} ${className || ''}`}>
      <div className="hud-streaming-header">
        <div className="hud-streaming-title">{title}</div>
        <div className="hud-streaming-status">
          <div className="hud-streaming-status-dot"></div>
          {status}
        </div>
      </div>
      
      <div className="hud-streaming-body">
        {cells.length > 0 && (
          <div className="hud-streaming-grid">
            {cells.map((cell, index) => (
              <div key={index} className="hud-streaming-cell">
                <div className="hud-streaming-icon">
                  {cell.icon}
                </div>
                <div className="hud-streaming-label">{cell.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {children}
      </div>
      
      {(metricValue || metricUnit) && (
        <div className="hud-streaming-footer">
          <div>
            <span className="hud-streaming-metrics">{metricValue}</span>
            {metricUnit && <span className="hud-streaming-unit">{metricUnit}</span>}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * HUD Dialog Component
 */
interface HUDDialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  style?: 1 | 2 | 3;
  color?: 'cyan' | 'blue';
  className?: string;
}

export const HUDDialog: React.FC<HUDDialogProps> = ({
  title,
  isOpen,
  onClose,
  children,
  footer,
  style = 1,
  color = 'cyan',
  className
}) => {
  if (!isOpen) return null;
  
  return (
    <div className={`hud-dialog hud-dialog-style-${style} hud-dialog-${color} ${className || ''}`}>
      <div className="hud-dialog-header">
        <div className="hud-dialog-title">{title}</div>
        <div className="hud-dialog-controls">
          <button className="hud-dialog-close" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="hud-dialog-body">
        {children}
      </div>
      
      {footer && (
        <div className="hud-dialog-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

/**
 * HUD Position Marker Component
 */
interface HUDPositionProps {
  label?: string;
  color?: 'cyan' | 'blue';
  className?: string;
}

export const HUDPosition: React.FC<HUDPositionProps> = ({
  label,
  color = 'cyan',
  className
}) => {
  return (
    <div className={`hud-position hud-position-${color} ${className || ''}`}>
      <div className="hud-position-marker">
        <div className="hud-position-corner hud-position-corner-tl"></div>
        <div className="hud-position-corner hud-position-corner-tr"></div>
        <div className="hud-position-corner hud-position-corner-bl"></div>
        <div className="hud-position-corner hud-position-corner-br"></div>
        {label && <div className="hud-position-label">{label}</div>}
      </div>
      <div className="hud-position-dot"></div>
    </div>
  );
};

/**
 * HUD Notification Component
 */
interface HUDNotificationProps {
  title: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
  onClose?: () => void;
  autoClose?: boolean;
  autoCloseTime?: number;
  className?: string;
}

export const HUDNotification: React.FC<HUDNotificationProps> = ({
  title,
  message,
  type = 'info',
  icon,
  onClose,
  autoClose = true,
  autoCloseTime = 5000,
  className
}) => {
  useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);
      
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseTime, onClose]);
  
  return (
    <div className={`hud-notification hud-notification-${type} ${className || ''}`}>
      <div className="hud-notification-header">
        <div className="hud-notification-title">
          {icon && <span className="hud-notification-icon">{icon}</span>}
          {title}
        </div>
        {onClose && (
          <button className="hud-notification-close" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>
      <div className="hud-notification-body">
        {message}
      </div>
    </div>
  );
};

/**
 * HUD Notifications Container Component (for managing multiple notifications)
 */
interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
}

export const useHUDNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  
  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setNotifications(prev => [...prev, { ...notification, id }]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
    
    return id;
  };
  
  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };
  
  const HUDNotificationsContainer: React.FC = () => {
    return (
      <div className="hud-notifications-container">
        {notifications.map(notification => (
          <HUDNotification
            key={notification.id}
            title={notification.title}
            message={notification.message}
            type={notification.type}
            icon={notification.icon}
            onClose={() => removeNotification(notification.id)}
            autoClose={true}
            className="mb-3"
          />
        ))}
      </div>
    );
  };
  
  return {
    addNotification,
    removeNotification,
    HUDNotificationsContainer
  };
};

/**
 * Scan Line Effect Component (overlay)
 */
interface ScanLineEffectProps {
  children: React.ReactNode;
  color?: 'cyan' | 'blue' | 'red';
}

export const ScanLineEffect: React.FC<ScanLineEffectProps> = ({
  children,
  color = 'cyan'
}) => {
  return (
    <div className={`scan-line-effect scan-line-effect-${color}`}>
      {children}
    </div>
  );
};