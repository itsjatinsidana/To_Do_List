import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Navbar } from './Navbar';


function App() {
  return (
    <>
       <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/navbar' element={<Navbar/>}/>
                   
                </Routes>
            </BrowserRouter>
    </>
  );
}

export default App;
