import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle registration form submission
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    
    console.log({
      username,
      email,
      password,
    });
    try {
      // Call backend to create a new user
      // const res = await apiRequest.post("/auth/register", {
      //   username,
      //   email,
      //   password,
      // });

      // On success redirect users to login screen
      navigate("/login");
    } catch (err) {
      console.log("register error:", err);
      setError("Registration failed");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Render registration form and brand image
  return (
    <div className="min-h-screen bg-[--background-dark] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col gap-8 items-center">
        {/* Form Container */}
        <div className="w-full max-w-md mx-auto justify-self-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-8">Create an Account</h1>
            
            <div className="space-y-4">
              <input 
                name="username" 
                type="text" 
                placeholder="Username" 
                required 
                minLength={3}
                maxLength={20}
                pattern="[a-zA-Z0-9_]+"
                title="Username must be 3-20 characters (letters, numbers, underscore only)"
                className="w-full px-4 py-3 bg-[--surface-dark] border border-[--border-dark] rounded-lg text-white placeholder:text-[--text-muted-dark] focus:outline-none focus:border-[--primary-dark] focus:ring-1 focus:ring-[--primary-dark] transition-all"
              />
              <input 
                name="email" 
                type="email" 
                placeholder="Email" 
                required 
                minLength={5}
                maxLength={50}
                title="Please enter a valid email address"
                className="w-full px-4 py-3 bg-[--surface-dark] border border-[--border-dark] rounded-lg text-white placeholder:text-[--text-muted-dark] focus:outline-none focus:border-[--primary-dark] focus:ring-1 focus:ring-[--primary-dark] transition-all"
              />
              <input 
                name="password" 
                type="password" 
                placeholder="Password" 
                required 
                minLength={6}
                maxLength={50}
                title="Password must be at least 6 characters"
                className="w-full px-4 py-3 bg-[--surface-dark] border border-[--border-dark] rounded-lg text-white placeholder:text-[--text-muted-dark] focus:outline-none focus:border-[--primary-dark] focus:ring-1 focus:ring-[--primary-dark] transition-all"
              />
            </div>
            
            <button 
              disabled={isLoading}
              className="w-full px-4 py-3 bg-linear-to-r from-violet-600 to-fuchsia-500 text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-violet-500/20"
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
            
            {error && <span className="block text-[--error] text-sm mt-2">{error}</span>}
            
            <Link 
              to="/login" 
              className="block text-center text-[--text-muted-dark] hover:text-white transition-colors mt-4"
            >
              Do you have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;