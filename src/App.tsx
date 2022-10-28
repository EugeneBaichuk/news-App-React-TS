import {Routes, Route} from 'react-router-dom';
import {FC} from "react";
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

const App:FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<ProtectedRoute><RespDrawer/></ProtectedRoute>}>
        <Route index element={<Home/>}/>
        <Route path='/:headline/:id' element={<ActiveCard/>}/>
        <Route path='hotnews' element={<HotNews/>}/>
        <Route path='hotnews/:headline/:id' element={<ActiveCard/>}/>
        <Route path='sports' element={<Sports/>}/>
        <Route path='sports/:headline/:id' element={<ActiveCard/>}/>
        <Route path='business' element={<Business/>}/>
        <Route path='business/:headline/:id' element={<ActiveCard/>}/>
        <Route path='entertainment' element={<Entertainment/>}/>
        <Route path='entertainment/:headline/:id' element={<ActiveCard/>}/>
        <Route path='technology' element={<Technology/>}/>
        <Route path='technology/:headline/:id' element={<ActiveCard/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='search/:headline/:id' element={<ActiveCard/>}/>
      </Route>
    </Routes>
  );
}
export default App;
