import './Layout.css';
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    
    <div className = "app-layout">
        <div className = "app-header">
          <Header />
        </div>

        <div className = "app-content">
         {children}
        </div>

        <div className = "app-footer">
          <Footer />
        </div>
    </div>
  )
}

export default Layout;