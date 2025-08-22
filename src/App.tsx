import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = lazy(() => import("./pages/Home"));
const PlayerDetail = lazy(() => import("./pages/PlayerDetail"));
const SignInForm = lazy(() => import("./pages/SignInForm"));
const SignUpForm = lazy(() => import("./pages/SignUpForm"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignInForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/player/:rk" element={<PlayerDetail />} />
            </Routes>
          </Suspense>
        </Router>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
