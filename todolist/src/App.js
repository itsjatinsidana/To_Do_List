import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Notes } from './Notes';


function App() {
  return (
    <>
       <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/navbar' element={<Navbar/>}/>
                    <Route path='/notes' element={<Notes/>}/>
                   
                </Routes>
            </BrowserRouter>
    </>
  );
}

export default App;
