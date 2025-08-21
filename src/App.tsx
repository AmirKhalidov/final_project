import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Players from "./pages/Players";
import PlayerDetail from "./pages/PlayerDetail";
import "./App.css";
import Filters from "./pages/Filters";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";
import { SignInForm } from "./pages/SignInForm";
import { SignUpForm } from "./pages/SignUpForm";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import { FavoritesProvider } from "./contexts/FavoritesContext";

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/player/:rk" element={<PlayerDetail />} />
            <Route path="/filters" element={<Filters />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
