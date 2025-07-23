import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  color?: 'blue' | 'green' | 'red' | 'yellow';
}

const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  icon,
  color = 'blue'
}) => {
  const valueClass = `stat-value stat-value-${color}`;
  const iconClass = `stat-icon stat-icon-${color}`;
  
  return (
    <div className="stat-card">
      <div className="stat-card-label">{label}</div>
      <div className="stat-card-content">
        <span className={valueClass}>{value}</span>
        <div className={iconClass}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;