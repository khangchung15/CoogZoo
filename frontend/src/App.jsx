import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Animal from './pages/animals';
import Exhibits from './pages/exhibits';
import Tickets from './pages/tickets';
import Account from './pages/account';
import EmployeeDash from './pages/employeedash';
import Membership from './pages/membership';
import Events from './pages/events';
import PrivateRoutes from './components/PrivateRoutes';
import Home from './pages/home';
import { AuthProvider } from './components/AuthContext';
import ManagerDash from './pages/managerDash/managerdash';
import ManageEmployees from './pages/managerDash/manageEmployees';
import ManageExhibits from './pages/managerDash/manageExhibits';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      {/* Set basename to '/coogzoo' */}
      <Router basename="/coogzoo">
        <Navbar />
        <Routes>  
          <Route path='/' element={<Home/>} />
          <Route path='/animals' element={<Animal />} />
          <Route path='/exhibits' element={<Exhibits />} />
            <Route path='/membership' element={<Membership />} />

          <Route element={<PrivateRoutes />}>
            <Route path='/tickets' element={<Tickets />} />
            <Route path='/account' element={<Account/>} />
            <Route path='/manager-dashboard/*' element={<ManagerDash />} />
            <Route path='/manager-dashboard/manage-employees' element={<ManageEmployees />} />
            <Route path='/manager-dashboard/manage-exhibits' element={<ManageExhibits />} />
          </Route>

          <Route path='/events' element={<Events />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/employee-dashboard' element={<EmployeeDash/>} />
        </Routes>
        <Footer /> 
      </Router>
    </AuthProvider>
  );
}

export default App;