// types.ts - Định nghĩa tất cả các kiểu dữ liệu được sử dụng trong ứng dụng

// Kiểu dữ liệu thời gian của game
export interface GameTime {
    year: number;
    month: number;
    day: number;
  }
  
  // Kiểu dữ liệu các chỉ số quốc gia
  export interface NationStats {
    population: string;
    gdp: string;
    energy: string;
    military: string;
  }
  
  // Kiểu dữ liệu cho biểu đồ tròn
  export interface ProgressValues {
    energy: number;
    defense: number;
    economy: number;
  }
  
  // Kiểu dữ liệu cho các thông báo tin tức
  export interface NewsItemData {
    id: number;
    type: 'info' | 'success' | 'warning' | 'danger';
    title: string;
    time: string;
    content: string;
  }
  
  // Kiểu dữ liệu cho các mục điều hướng
  export interface NavItem {
    path: string;
    label: string;
    icon: React.ReactNode;
  }
  
  // Kiểu dữ liệu cho các thẻ thống kê
  export interface StatCardData {
    label: string;
    value: string;
    icon: React.ReactNode;
    color?: 'info' | 'success' | 'warning' | 'danger';
  }
  
  // Kiểu dữ liệu cho biểu đồ
  export interface ChartDataPoint {
    name: string;
    population: number;
    gdp: number;
    military: number;
    [key: string]: string | number;
  }