import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import ProtectedRoute from './routing/ProtectedRoute';
import './App.css';
import 'tailwindcss/tailwind.css';
import DaisyUIDemo from './DaisyUIDemo';
import SidebarLayout from './screens/layouts/SidebarLayout';
import PerusahaanScreen from './screens/PerusahaanScreen';
import HeaderOnlyLayout from './screens/layouts/HeaderOnlyLayout';

function App() {
  return (
    <div className="h-screen font-nunito-sans">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<ProfileScreen />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/perusahaan" element={<HeaderOnlyLayout />}>
            <Route index element={<PerusahaanScreen />} />
            <Route path="/perusahaan/naon" element={<h1>Hello</h1>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
