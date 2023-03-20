import { Route, Routes } from "react-router-dom"


import LoginPage from './components/loginPage/LoginPage';
import Register from './components/registerPage/Register';

const LogRegCom = () => {
  return (
    <Routes>
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<Register />} />
    </Routes>

  )
}

export default LogRegCom