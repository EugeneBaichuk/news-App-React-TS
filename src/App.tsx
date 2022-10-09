import { createContext, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import Drawer from './components/_layout/drawer';
import HotNews from './pages/hotNews';
import Sports from './pages/sports';
import Business from './pages/business';
import Entertainment from './pages/entertainment';
import Blog from './pages/blog';
import Technology from './pages/technology';
import Search from './pages/search';

export const Context = createContext <any>({});

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [search, setSearch] = useState("");

  const setCurrentSearchVal =  () => {
    setSearch(searchVal);
  }

  return (
    <Context.Provider value={{
      search: [search, setSearch],
      searchVal: [searchVal, setSearchVal],
      setCurrentSearchVal
    }
    }>
        <Routes>
          <Route path='/' element={<Drawer/>}>
            <Route index element={<Home/>}/>
            <Route path='hot-news' element={<HotNews/>}/>
            <Route path='sports' element={<Sports/>}/>
            <Route path='business' element={<Business/>}/>
            <Route path='entertainment' element={<Entertainment/>}/>
            <Route path='technology' element={<Technology/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='search' element={<Search/>}/>
          </Route>
        </Routes>
    </Context.Provider>
  );
}

export default App;
