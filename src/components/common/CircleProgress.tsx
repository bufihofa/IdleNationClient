import React from 'react';

interface CircleProgressProps {
  value: number;
  icon: React.ReactNode;
  color?: 'blue' | 'green' | 'red' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  value,
  icon,
  color = 'blue',
  size = 'md',
}) => {
  const radius = size === 'lg' ? 45 : size === 'md' ? 35 : 25;
  const strokeWidth = size === 'lg' ? 4 : size === 'md' ? 3 : 2;
  const innerRadius = radius - strokeWidth;
  const circumference = 2 * Math.PI * innerRadius;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  // Color variables based on the color prop
  const getColorVariables = () => {
    switch (color) {
      case 'blue':
        return {
          primary: 'var(--color-accent-blue)',
          secondary: '#0070cc',
          shadow: 'var(--neon-blue-sm)'
        };
      case 'green':
        return {
          primary: 'var(--color-accent-green)',
          secondary: '#00cc7a',
          shadow: 'var(--neon-green-sm)'
        };
      case 'red':
        return {
          primary: 'var(--color-accent-red)',
          secondary: '#cc1f4a',
          shadow: 'var(--neon-red-sm)'
        };
      case 'yellow':
        return {
          primary: 'var(--color-accent-yellow)',
          secondary: '#cca800',
          shadow: 'var(--neon-yellow-sm)'
        };
      default:
        return {
          primary: 'var(--color-accent-blue)',
          secondary: '#0070cc',
          shadow: 'var(--neon-blue-sm)'
        };
    }
  };
  
  const colorVars = getColorVariables();
  const gradientId = `circleGradient-${color}-${size}`;
  const valueClass = `text-${color}`;
  
  return (
    <div className="circle-progress">
      <svg 
        width={radius * 2 + 10} 
        height={radius * 2 + 10} 
        className="circle-svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorVars.secondary} />
            <stop offset="100%" stopColor={colorVars.primary} />
          </linearGradient>
        </defs>
        
        {/* Outer decorative circle */}
        <circle
          cx={radius + 5}
          cy={radius + 5}
          r={radius + 2}
          stroke={colorVars.primary}
          strokeWidth="0.5"
          fill="transparent"
          strokeDasharray="4 2"
          opacity="0.2"
        />
        
        {/* Circle ticks */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x1 = (radius + 5) + (radius + 3) * Math.cos(angle);
          const y1 = (radius + 5) + (radius + 3) * Math.sin(angle);
          const x2 = (radius + 5) + (radius + 5) * Math.cos(angle);
          const y2 = (radius + 5) + (radius + 5) * Math.sin(angle);
          
          return (
            <line
              key={`tick-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={colorVars.primary}
              opacity={i % 4 === 0 ? "0.4" : "0.2"}
              strokeWidth={i % 4 === 0 ? 1.5 : 0.8}
            />
          );
        })}
        
        {/* Base track */}
        <circle
          cx={radius + 5}
          cy={radius + 5}
          r={innerRadius}
          stroke={colorVars.primary}
          strokeWidth={strokeWidth}
          fill="transparent"
          opacity="0.15"
        />
        
        {/* Progress */}
        <circle
          cx={radius + 5}
          cy={radius + 5}
          r={innerRadius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ filter: `drop-shadow(${colorVars.shadow})` }}
        />
      </svg>
      
      <div className="circle-value">
        <span className={`circle-value-text ${valueClass}`}>
          {value}%
        </span>
        <span className="circle-icon">{icon}</span>
      </div>
    </div>
  );
};

export default CircleProgress;