
import './App.css';
import NavBar from './components/ui/NavBar/NavBar'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profiles'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profile/:id' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
