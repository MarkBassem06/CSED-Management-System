import { Routes, Route, Link, useLocation } from 'react-router-dom'

// Placeholder components to make the Router work without errors
const Home = () => <div className="text-text-dark text-center mt-20 text-2xl">Home Page</div>;
const Levels = () => <div className="text-text-dark text-center mt-20 text-2xl">Levels Page</div>;
const Courses = () => <div className="text-text-dark text-center mt-20 text-2xl">Courses Page</div>;
const MyProgress = () => <div className="text-text-dark text-center mt-20 text-2xl">My Progress Page</div>;
const NotFound = () => <div className="text-text-dark text-center mt-20 text-2xl">404 - Not Found</div>;

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Helper to determine if a link is active
  const isActive = (path: string) => 
    currentPath === path || (path !== '/' && currentPath.startsWith(path));

  return (
    <div className="min-h-screen bg-background-dark font-sans text-text-dark">
      
      {/* Top Navigation Bar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b border-white/5 bg-background-dark sticky top-0 z-50 gap-4">
        
        {/* Left: Logo Section */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-600 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/20">
            <i className="fa-solid fa-graduation-cap text-lg"></i>
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-white tracking-tight">CSE Portal</h1>
            <p className="text-[11px] text-text-muted-dark font-medium">Computer & Systems Eng.</p>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex items-center gap-1 md:gap-2">
          <Link 
            to="/" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive('/') 
                ? 'bg-primary-dark text-white shadow-md shadow-violet-500/10' 
                : 'text-text-muted-dark hover:text-white hover:bg-white/5'
            }`}
          >
            <i className="fa-solid fa-house"></i> 
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link 
            to="/levels" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive('/levels') 
                ? 'bg-primary-dark text-white shadow-md shadow-violet-500/10' 
                : 'text-text-muted-dark hover:text-white hover:bg-white/5'
            }`}
          >
            <i className="fa-solid fa-layer-group"></i> 
            <span className="hidden sm:inline">Levels</span>
          </Link>

          <Link 
            to="/courses" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive('/courses') 
                ? 'bg-primary-dark text-white shadow-md shadow-violet-500/10' 
                : 'text-text-muted-dark hover:text-white hover:bg-white/5'
            }`}
          >
            <i className="fa-solid fa-book-open"></i> 
            <span className="hidden sm:inline">Courses</span>
          </Link>

          <Link 
            to="/myprogress" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive('/myprogress') 
                ? 'bg-primary-dark text-white shadow-md shadow-violet-500/10' 
                : 'text-text-muted-dark hover:text-white hover:bg-white/5'
            }`}
          >
            <i className="fa-solid fa-chart-line"></i> 
            <span className="hidden sm:inline">My Progress</span>
          </Link>
        </div>

        {/* Right: Search & Profile */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          {/* Search Bar */}
          <div className="relative hidden lg:block group">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-dark group-focus-within:text-primary-dark transition-colors text-xs"></i>
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="bg-input-dark border border-transparent focus:border-primary-dark/50 focus:bg-surface-dark outline-none text-sm text-white rounded-lg pl-9 pr-4 py-2 w-64 transition-all placeholder:text-gray-600"
            />
          </div>
          
          {/* Notification Bell */}
          <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5 text-text-muted-dark hover:text-white transition-colors cursor-pointer">
            <i className="fa-regular fa-bell"></i>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-background-dark"></span>
          </button>
          
          {/* User Profile */}
          <button className="w-8 h-8 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-text-muted-dark hover:text-white hover:border-primary-dark/50 cursor-pointer transition-all">
            <i className="fa-regular fa-user text-xs"></i>
          </button>
        </div>
      </nav>

      {/* Main Page Content */}
      <div className="p-6 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/myprogress" element={<MyProgress />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App