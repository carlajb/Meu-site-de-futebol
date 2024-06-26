import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import CadastroUsuario from './pages/Home/Cadastro/cadastro';

import Header from './Components/Header/Header.jsx';
import Login from './Components/Login/Login';
import './App.css';
import { UserStorage } from './UserContext.jsx';
import User from './Components/User/User.jsx';
import ProtectedRoute from './Components/Helper/ProtectedRoute.jsx';

// Importe outros componentes conforme necessário

function App() {
  return (
    <Router>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserStorage>
    </Router>
  );
}

export default App;
