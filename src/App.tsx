
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard/Dashboard'


const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  return <>{children}</>
}

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<div>About Page</div>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </Layout>
  )
}

function App() {
  return (
    
      <Routes>
        <Route path="login" element={<div>Login</div>} />

        <Route 
            path="/*" 
            element={
              <ProtectedRoute> 
                <AppRoutes/>
              </ProtectedRoute>
            } 
          />

      </Routes>
  )
}

export default App;
