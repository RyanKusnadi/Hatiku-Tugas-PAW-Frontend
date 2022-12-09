import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Diagnosis from './pages/Diagnosis'
import Result from './pages/Result'
import './App.css'
import AAADisease from './pages/diseases/AAADisease'
import CHDDisease from './pages/diseases/CHDDisease'
import PADDisease from './pages/diseases/PADDisease'
import SDisease from './pages/diseases/SDisease'
import TAADisease from './pages/diseases/TAADisease'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NotFound from './pages/NotFound'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiUsers } from 'react-icons/fi'
import Admin from './layouts/Admin'


function App() {
  return (
    <Router>
      <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
        <TooltipComponent content="Navigation" position="top" offsetX={18}>
          <button type="button"
          style={{background:'blue', borderRadius:'50%'}} 
          className="text-3xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray">
            <FiUsers/>
          </button>
        </TooltipComponent>
      </div>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Diagnosis/>}/>
        <Route path='/admin/*' element={<Admin/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/404'  element={<NotFound/>} />
        <Route path="/*" element={<Navigate to={'/404'}/>}/>
        {/* <Route path="*" caseSensitive={false} element={<NotFound/>}/> */}
        <Route path="/Result" caseSensitive={false} element={<Result/>}/>
        <Route path="/Result/AbdominalAorticAneurysm" caseSensitive={false} element={<AAADisease/>}/>
        <Route path="/Result/CoronaryHeartDisease" caseSensitive={false} element={<CHDDisease/>}/>
        <Route path="/Result/PeripheralArterialDisease" caseSensitive={false} element={<PADDisease/>}/>
        <Route path="/Result/Stroke" caseSensitive={false} element={<SDisease/>}/>
        <Route path="/Result/ThoracicAorticAneurysms" caseSensitive={false} element={<TAADisease/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
