import Home from './pages/home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Drawer from './components/drawer';
import HotNews from './pages/hotNews';
import Sports from './pages/sports';
import Business from './pages/business';
import Entertainment from './pages/entertainment';
import Blog from './pages/blog';
import Technology from './pages/technology';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Drawer/>}>
          <Route index element={<Home/>}/>
          <Route path='hot-news' element={<HotNews/>}/>
          <Route path='sports' element={<Sports/>}/>
          <Route path='business' element={<Business/>}/>
          <Route path='entertainment' element={<Entertainment/>}/>
          <Route path='technology' element={<Technology/>}/>
          <Route path='blog' element={<Blog/>}/>
        </Route>
      </Routes>
    </Router>
        
  );
}

export default App;
