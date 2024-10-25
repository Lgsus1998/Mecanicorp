import { Link } from "react-router-dom";
import "./navbar.css"

const Header = () => {
    return(
        <div className="container">
            <div className="row">
                
                <h2 className="text-end">"Somos tu mejor opcion"</h2>
                <div className="col">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwpS4o0jfc92v8r8npsS0zkMef96rnFCOofq_288o8-3bl4_clTSLojXn3O4tmLcCaB0srxWCErUua48bm_SNjNQUmByocgVZgwI0WCWg88R9Odwv3YS58tARPbGHHvik6T0q5OlScGSppHEC-SfJ3wCTxe-S7V3htOGvLcTQ7TCD6QB2vNwM3yha7CWZG/s320/attachment_69994489.png" alt="mecanicorp"
                    width={180}/>
                </div>
                <div>
                    <h2 className="text-end">"Mecanicos al alcance de tu mano"</h2>
                </div>

             <div className="text-center">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Mecanicorp.®</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/biblioteca">Biblioteca</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contactos">Servicios Mecanicos</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  id="agencias"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Contactanos</a>
                            <ul className="dropdown-menu" aria-labelledby="agencias" id="navbar">
                                <li><a className="dropdown-item" href="#">whatsapp:<br></br><a className="text-center" href="https://wa.me/523333529504?text=Deseo%20hablar%20con%20un%20asesor" target="_blank">33-33-52-35-04</a></a></li>
                                <li><a className="dropdown-item" href="#">fecebook:<br></br><a className="text-center" href="https://www.facebook.com/profile.php?id=61567286016691" target="_blank">Mecanicorps</a></a></li>
                                <li><a className="dropdown-item" href="#">telefonos:<br></br>01-800-mecanicorp</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Conoce mas...</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
    </div>
  </div>
</nav>
                    
                    </div>
            </div>
        </div>
    )
}
export default Header;