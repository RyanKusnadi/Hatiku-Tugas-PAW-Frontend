import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Diagnosis from './pages/Diagnosis'
import Result from './pages/Result'
import AAADisease from './pages/diseases/AAADisease'
import CHDDisease from './pages/diseases/CHDDisease'
import PADDisease from './pages/diseases/PADDisease'
import SDisease from './pages/diseases/SDisease'
import TAADisease from './pages/diseases/TAADisease'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Diagnosis/>}/>
        <Route path='/admin/*' element={<Admin/>} />
        <Route path='/login' element={<LoginPage/>} />        
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/404'  element={<Error404/>} />
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
