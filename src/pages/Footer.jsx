import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <div>
            <footer className="text-white py-4 bg-dark">
                <div className="container">
                    <nav className="row">
                        <Link to="/"  className="col-12 col-md-3 d-felx aling-items-center justify-content-center">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwpS4o0jfc92v8r8npsS0zkMef96rnFCOofq_288o8-3bl4_clTSLojXn3O4tmLcCaB0srxWCErUua48bm_SNjNQUmByocgVZgwI0WCWg88R9Odwv3YS58tARPbGHHvik6T0q5OlScGSppHEC-SfJ3wCTxe-S7V3htOGvLcTQ7TCD6QB2vNwM3yha7CWZG/s320/attachment_69994489.png"
                        className="mx-2"  height='80'/>
                        <p>Mecanicorp.®</p>
                        <p>COPYRIGHT © 2024</p>
                        
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='text-center font-weight-bold mb-2'>MECANICORP.®</li>
                            <hr></hr>
                            <li className='text-center'>"MECANICOS AL ALCANCE DE TU MANO"</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>PROVEEDORES!</li>
                            <hr></hr>
                            <li>
                                <a className="text-center" href="https://www.toyota.mx/" target="_blank">TOYOTA</a>
                            </li>
                            <li>
                                <a className="text-center" href="https://www.vw.com.mx/" target="_blank">VOLKSWAGEN</a>
                            </li>
                            <li>
                                <a className="text-center" href="https://www.chevrolet.com.mx/" target="_blank">CHEVROLET</a>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='text-center font-weight-bold mb-2'>SIGUENOS!</li>
                        <hr></hr>
                            <li className="d-flex justify-content-between">

                            
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-x"></i>
                            </li>
                        </ul>
    
                    </nav>
                </div>

            </footer>
        </div>
    )
}
export default Footer;