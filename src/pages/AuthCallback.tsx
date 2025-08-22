import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {

    console.log("=== AUTH CALLBACK DEBUG ===");
    console.log("Domain:", window.location.hostname);
    console.log("Full URL:", window.location.href);
    console.log("Search params:", window.location.search);
    console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
    console.log("User:", user);
    console.log("Loading:", loading);
    console.log("=== END DEBUG ===");

    if (!loading) {
      if (user) {
        navigate("/", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    }
  }, [user, loading, navigate]);

  return <LoadingSpinner />;
}
