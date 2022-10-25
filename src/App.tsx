import {Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import RespDrawer from './components/_layout/drawer';
import HotNews from './pages/hotNews';
import Sports from './pages/sports';
import Business from './pages/business';
import Entertainment from './pages/entertainment';
import Blog from './pages/blog';
import Technology from './pages/technology';
import Search from './pages/search';
import Login  from './pages/login-page/Login';
import ActiveCard from './pages/activeCardPage';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<ProtectedRoute><RespDrawer/></ProtectedRoute>}>
        <Route index element={<Home/>}/>
        <Route path='hotnews' element={<HotNews/>}/>
        <Route path='hotnews/:id' element={<ActiveCard/>}/>
        <Route path='sports' element={<Sports/>}/>
        <Route path='business' element={<Business/>}/>
        <Route path='entertainment' element={<Entertainment/>}/>
        <Route path='technology' element={<Technology/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='search' element={<Search/>}/>
        {/* <Route path=':id' element={<ActiveCard/>}/> */}
      </Route>
    </Routes>
  );
}
export default App;
