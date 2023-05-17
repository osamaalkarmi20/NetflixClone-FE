import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./components/Navbars";
import FavList from './components/FavList';
function App() {
  return (<>
    <Navbars />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/favlist' element={<FavList />}> </Route>
    </Routes>
  </>
  )
}

export default App;
