import React from 'react'
import Home from '../home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
// import Newsdetail from '../components/newsdetails/Newsdetails'
import NewsDeatils from '../components/newsDetails/NewsDeatils'
import Login from '../components/login/Login'
function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Header' element={<Header />} />
                <Route path='/Footer' element={<Footer />} />
               <Route path='/Login' element={<Login />}/> 
                <Route path='/Newsdetail/:id' element={<NewsDeatils/>}/>
            </Routes>

        </div>
    )
}

export default Router