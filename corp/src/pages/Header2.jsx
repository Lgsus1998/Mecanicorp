import React from "react";
import { Link } from "react-router-dom";


const Header2 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwpS4o0jfc92v8r8npsS0zkMef96rnFCOofq_288o8-3bl4_clTSLojXn3O4tmLcCaB0srxWCErUua48bm_SNjNQUmByocgVZgwI0WCWg88R9Odwv3YS58tARPbGHHvik6T0q5OlScGSppHEC-SfJ3wCTxe-S7V3htOGvLcTQ7TCD6QB2vNwM3yha7CWZG/s320/attachment_69994489.png" alt="mecanicorp"
                    width={180}></img>
                    </div>
                <div className="col">
                <h2>"MECANICOS AL ALCANCE DE TU MANO"</h2>
                <hr></hr>
                <h1>"SOMOS TU MEJOR OPCION"</h1>

                </div>
                <div>
                <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/biblioteca">Biblioteca</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/directorio">Servicios Mecanicos</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Contactanos</a>
                        </li>
                        </ul>

                </div>
            </div>
        </div>
    )
}

export default Header2;