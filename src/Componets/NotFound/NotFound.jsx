import { Link } from "react-router-dom"
import style from "./NotFound.module.css"

export default function NotFound() {
    return (
        <div className={style.container} >
            <img className={style.img} src="https://img.freepik.com/vector-premium/plantilla-web-error-404-lindo-perrito_23-2147763344.jpg" />
            <Link to= "/homePage" >
            <button className={style.buton} >home</button>
            </Link>
        </div>
    )
}