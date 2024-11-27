import { Outlet } from "react-router-dom";
import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../styles/layout.module.css";
import SideBar from "../components/SideBar";
const Layout = () =>{
    return(
        <>
        <Header/>
        <div className={style.outletConatainer}>
            <SideBar/>
            <Outlet/>
        </div>
     

        <Footer/>

        </>
    )

}

export default Layout;

