
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'


const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  return <>{children}</>
}

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<div>About Page</div>} />
        <Route path="*" element={<div>Home Page</div>} />
      </Routes>
    </Layout>
  )
}

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App;
