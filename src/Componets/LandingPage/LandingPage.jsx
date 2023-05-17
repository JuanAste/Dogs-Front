import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css'

const LandingPage = () => {
    return(
        <div className={style.container}>
            <div className={style.page}>
            <h1>Welcome to my dogs PI</h1>
            <Link to= "/homePage">
            <img className={style.im} src="https://cdn-icons-png.flaticon.com/512/64/64431.png" alt="" />
            </Link>
            <h4>By Juan Pablo Aste</h4>
            </div>
        </div>
    )
}

export default LandingPage