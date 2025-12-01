import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Login component: renders the auth form and handles user sign-in
function Login() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Form submit handler: reads input values, calls API and updates auth state
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);
    setErr("");
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    // call backend to authenticate user credentials
    try {
      // const res = await apiRequest.post("/auth/login", {
      //   username,
      //   password,
      // });
      console.log("login attempt:", { username, password });
      // set the authenticated user in global context
      // updateUser(res.data.user);
      navigate("/");
    } catch (err) {
      console.error("login error:", err);
      setErr("Login failed");
    } finally {
      setIsLoading(false);
    }
  };
  
  // render two columns: the login form and a logo image column
  return (
    <div className="min-h-screen bg-[--background-dark] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl gap-8 items-center">
        {/* Form Container */}
        <div className="w-full max-w-md mx-auto justify-self-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-8">Welcome back</h1>
            
            <div className="space-y-4">
              <input
                name="username"
                required
                minLength={3}
                maxLength={20}
                type="text"
                placeholder="Username"
                title="Username must be 3-20 characters"
                className="w-full px-4 py-3 bg-[--surface-dark] border border-[--border-dark] rounded-lg text-white placeholder:text-[--text-muted-dark] focus:outline-none focus:border-[--primary-dark] focus:ring-1 focus:ring-[--primary-dark] transition-all"
              />
              <input
                name="password"
                type="password"
                required
                minLength={6}
                maxLength={50}
                placeholder="Password"
                title="Password must be at least 6 characters"
                className="w-full px-4 py-3 bg-[--surface-dark] border border-[--border-dark] rounded-lg text-white placeholder:text-[--text-muted-dark] focus:outline-none focus:border-[--primary-dark] focus:ring-1 focus:ring-[--primary-dark] transition-all"
              />
            </div>
            
            <button 
              disabled={isLoading}
              className="w-full px-4 py-3 bg-linear-to-r from-violet-600 to-fuchsia-500 text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-violet-500/20"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            
            {err && <span className="block text-[--error] text-sm mt-2">{err}</span>}
            
            <Link 
              to="/register" 
              className="block text-center text-[--text-muted-dark] hover:text-white transition-colors mt-4"
            >
              {"Don't"} you have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;