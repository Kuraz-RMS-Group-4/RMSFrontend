import './App.css';
import {Route,Routes} from 'react-router-dom';
import Login from '../src/Pages/Login';
import Register from '../src/Pages/Register';
function App() {
  return (
    <div className="background">
      <div className="flex justify-end mx-9 items-center h-full">
    <Routes>
       <Route path='/Login' element={<Login/>}/>
       <Route path='Register' element={<Register/>}/>
     </Routes>
    </div>
    </div>
  )
}

export default App
