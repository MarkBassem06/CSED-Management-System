import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Levels from './Pages/Levels'
import Courses from './Pages/Courses'
import MyProgress from './Pages/MyProgress'
import NotFound from './Pages/NotFound'
function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => 
    currentPath === path || (path !== '/' && currentPath.startsWith(path));

  return (
    <div className="min-h-screen bg-background-dark font-sans text-text-dark">
      
      <nav className="flex flex-wrap items-center justify-between px-4 md:px-6 py-4 border-b border-white/5 bg-background-dark sticky top-0 z-50 gap-y-4 gap-x-4">
        
        {/* 1. Logo (Order 1: Always Top Left) */}
        <div className="flex items-center gap-3 order-1">
          <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-600 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/20 shrink-0">
            <i className="fa-solid fa-graduation-cap text-lg"></i>
          </div>
          <div >
            <h1 className="text-lg font-bold text-white ">CSE Portal</h1>
            <p className="text-[11px] text-text-muted-dark font-medium hidden sm:block">Computer & Systems Eng.</p>
          </div>
        </div>

        {/* 2. Actions: Bell & Profil*/}
        <div className="flex items-center gap-3 order-2 md:order-4">
           
           <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5 text-text-muted-dark hover:text-white transition-colors cursor-pointer">
            <i className="fa-regular fa-bell text-lg"></i>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-background-dark"></span>
          </button>
          
          {/* User Profile */}
          <button className="w-9 h-9 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-text-muted-dark hover:text-white hover:border-primary-dark/50 cursor-pointer transition-all">
            <i className="fa-regular fa-user text-sm"></i>
          </button>
        </div>

        {/* 3. Search Bar (Mobile: Order 3 Full Width / Desktop: Order 3 Auto Width) */}
        <div className="relative group order-3 md:order-3 w-full md:w-auto">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-dark group-focus-within:text-primary-dark transition-colors text-xs"></i>
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="w-full md:w-64 bg-input-dark border border-transparent focus:border-primary-dark/50 focus:bg-surface-dark outline-none text-sm text-white rounded-lg pl-9 pr-4 py-2.5 transition-all placeholder:text-gray-600 shadow-sm"
          />
        </div>

        {/* 4. Navigation Links (Mobile: Order 4 Full Width Scrollable / Desktop: Order 2 Center) */}
        <div className="flex items-center gap-2 order-4 md:order-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <Link 
            to="/" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shrink-0 ${
              isActive('/') 
                ? 'bg-primary-dark text-white shadow-md shadow-violet-500/10' 
                : 'text-text-muted-dark hover:text-white hover:bg-white/5'
            }`}
          >
            <i className="fa-solid fa-house"></i> 
            <span>Home</span>
          </Link>

          <Link 
            to="/levels" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shrink-0 ${
              isActive('/levels') 
                ? 'bg-primary-dark text-white shadow-md shadow-violet-500/10' 
                : 'text-text-muted-dark hover:text-white hover:bg-white/5'
            }`}
          >
            <i className="fa-solid fa-layer-group"></i> 
            <span>Levels</span>
          </Link>

          <Link 
            to="/courses" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shrink-0 ${
              isActive('/courses') 
                ? 'bg-primary-dark text-white shadow-md shadow-violet-500/10' 
                : 'text-text-muted-dark hover:text-white hover:bg-white/5'
            }`}
          >
            <i className="fa-solid fa-book-open"></i> 
            <span>Courses</span>
          </Link>

          <Link 
            to="/myprogress" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shrink-0 ${
              isActive('/myprogress') 
                ? 'bg-primary-dark text-white shadow-md shadow-violet-500/10' 
                : 'text-text-muted-dark hover:text-white hover:bg-white/5'
            }`}
          >
            <i className="fa-solid fa-chart-line"></i> 
            <span>My Progress</span>
          </Link>
        </div>

      </nav>

      {/* Main Page Content */}
      <div className="p-4 md:p-6 max-w-7xl mx-auto">
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