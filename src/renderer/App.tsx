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

function App() {
  return (
    // <Router>
    //   <Header />
    //   <main className="container content">
    //     <Routes>
    //       <Route path="/" element={<HomeScreen />} />
    //       <Route path="/login" element={<LoginScreen />} />
    //       <Route path="/register" element={<RegisterScreen />} />
    //       <Route element={<ProtectedRoute />}>
    //         <Route path="/user-profile" element={<ProfileScreen />} />
    //       </Route>
    //       <Route path="*" element={<Navigate to="/" replace />} />
    //     </Routes>
    //   </main>
    // </Router>
    <div>
      <h1>Hello FDPJ</h1>
      <DaisyUIDemo />
    </div>
  );
}

export default App;
