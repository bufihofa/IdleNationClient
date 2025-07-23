import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Navigation from '../components/layout/Navigation';

// Views
import DashboardView from '../components/dashboard/DashboardView';
import PopulationView from '../components/population/PopulationView';
import BuildingView from '../components/building/BuildingView';
import EconomicView from '../components/economic/EconomicView';
import FinanceView from '../components/finance/FinanceView';
import MarketView from '../components/market/MarketView';
import MilitaryView from '../components/military/MilitaryView';

// Auth
import AuthPage from '../components/auth/AuthPage';
import UIDemoView from '../components/ui-demo/UIDemoView';
import HUDDemoView from '../components/cyberpunk-hud/HUDDemoView';
// Interface cho page title config
interface PageTitleConfig {
  [key: string]: string;
}

// Cấu hình tiêu đề trang
const pageTitles: PageTitleConfig = {
  '/dashboard': 'Tổng quan',
  '/population': 'Dân số',
  '/building': 'Xây dựng',
  '/economic': 'Kinh tế',
  '/finance': 'Tài chính',
  '/market': 'Thị trường',
  '/military': 'Quân sự',
  '/map': 'Bản đồ Thế giới',
};

const AppRouter: React.FC = () => {
  // State để kiểm tra đăng nhập
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  
  // Game time state
  const [gameTime, setGameTime] = React.useState({
    year: 2157,
    month: 1,
    day: 1,
  });

  // Cập nhật thời gian trong game
  React.useEffect(() => {
    if (!isAuthenticated) return;
    
    const timer = setInterval(() => {
      setGameTime((prevTime) => {
        const newDay = prevTime.day + 1;
        let newMonth = prevTime.month;
        let newYear = prevTime.year;

        if (newDay > 30) {
          newMonth += 1;
          if (newMonth > 12) {
            newYear += 1;
            newMonth = 1;
          }
          return { year: newYear, month: newMonth, day: 1 };
        }

        return { ...prevTime, day: newDay };
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isAuthenticated]);

  // Xử lý sự kiện click vào quốc gia
  const handleCountryClick = (event: any) => {
    console.log(`Đã click vào quốc gia: ${event.countryId} tại vị trí (${event.coordinate.x}, ${event.coordinate.y})`);
  };
  
  // Thiết lập layout dựa trên authentication state
  const renderAppContent = () => {
    
    
    // User đã đăng nhập, hiển thị app
    return (
      <div className="app">
        <Header gameTime={gameTime} />
        <Navigation />
        
        <main className="app-main">
          <Routes>
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/population" element={<PopulationView />} />
            <Route path="/building" element={<BuildingView />} />
            <Route path="/economic" element={<EconomicView />} />
            <Route path="/finance" element={<FinanceView />} />
            <Route path="/market" element={<MarketView />} />
            <Route path="/military" element={<MilitaryView />} />
            <Route path="/ui-demo" element={<UIDemoView/>} />
            <Route path="/ui-demo2" element={<HUDDemoView/>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    );
  };

  return (
    <BrowserRouter>
      {renderAppContent()}
    </BrowserRouter>
  );
};

export default AppRouter;