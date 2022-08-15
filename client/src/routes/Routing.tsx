import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from '../pages/Login';
import Home from '../pages/Home';
import { Register } from '../pages/Register';
import '../styles/style.css';

import { Mapas } from '../pages/Mapas'       
import Categorias from '../pages/Categorias';
import ByCategory from '../pages/ByCategory';
import Dashboard from '../pages/Dashboard';
import Navbar from '../components/Navbar/Navbar';
import { Auth } from '../hooks/useAuth';
import { NotFound } from '../components/NotFound/NotFound';
import { Project } from '../pages/Project';

function Routing(){
    const { err, check } = Auth('/api/perfil');

    return(
        <Router>
            <Navbar status={err}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                
                <Route path='/mapas' element={<Mapas/>}/>
                <Route path='/mapas/:id' element={<Dashboard/>}/>


                <Route path='/categorias' element={<Categorias/>}/>
                <Route path='/categorias/:id' element={<ByCategory/>}/>

                <Route path='/Saiba_mais' element={<Project/>}/>

                <Route path="*" element={<NotFound/>}/>

                <Route path='/login'
                    element={{...!err && check ? <Navigate to='/'/> : err && !check ? <Login/> :<div></div>}}
                />
                <Route path='/register' 
                    element={{...!err  && check ? <Navigate to='/' replace /> : err && !check ? <Register/> : <div></div>}}
                />               
            </Routes>
        </Router>
    )

}
export default Routing;
