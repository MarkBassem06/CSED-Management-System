import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Levels from './Pages/Levels'
import Courses from './Pages/Courses'
import MyProgress from './Pages/MyProgress'
import NotFound from './Pages/NotFound'

function App() {
  return (
   <>
      <nav className="flex gap-4 mb-10 border-b pb-4">
        <Link to="/" className="">Home</Link>
        <Link to="/levels" className="">Levels</Link>
        <Link to="/courses" className="">Courses</Link>
        <Link to="/myprogress" className="">My Progress</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/myprogress" element={<MyProgress />} />
        <Route path="/*" element={<NotFound />} />
        
      </Routes>
   </>
  )
}

export default App