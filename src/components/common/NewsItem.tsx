import React from 'react';

interface NewsItemProps {
  type: 'info' | 'success' | 'warning' | 'danger';
  title: string;
  time: string;
  content: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ type, title, time, content }) => {
  return (
    <div className={`news-item news-item-${type}`}>
      <div className="news-header">
        <h4 className="news-title">
          <span className="news-indicator"></span>
          {title}
        </h4>
        <span className="news-time">{time}</span>
      </div>
      <p className="news-content">{content}</p>
    </div>
  );
};

export default NewsItem;