
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import { Login } from './Components/Login/Login';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import PrivateComponents from './Components/PrivateComponents';
import Product from './Components/Product/Product';
import { Productlist } from './Components/Productlist/Productlist';
import { Updatecomponent } from './Components/Updatecomponent/Updatecomponent';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<PrivateComponents/>}>
      <Route path='/' element={<Productlist/>}/>
      <Route path='/add' element={<Product/>}/>
      <Route path='/update/:id' element={<Updatecomponent/>}/>
      <Route path='/logout' element={<h1>This is LOGOUT page</h1>}/>
      </Route>
      
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
