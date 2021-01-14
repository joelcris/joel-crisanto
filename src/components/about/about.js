import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <>
        {/* about
            ================================================== */}
        <section id="about" className="s-about target-section">
        <div className="row">
            <div className="column large-3 tab-12">
                <img className="s-about__pic" src="images/helmet.jpg" alt />
            </div>
                <div className="column large-9 tab-12 s-about__content">
                    <h3>Acerca de nosotros</h3>
                        <p>
                            Empresa versátil, capaz de realizar prácticamente cualquier actividad relacionada con la construcción
                            o con la elaboración de proyectos de diversos tipos,
                            la compra venta, importación, exportación, comercialización y distribución de todo tipo de bienes
                            y servicios necesarios para cumplir con su objeto.

                        </p>
                    <hr />
                    <div className="row s-about__content-bottom">
                        <div className="column w-1000-stack">
                        <h3>Contacto</h3>
                        <p>
                            Josefa Ortiz De Domínguez Num. 106<br />
                            Col. 3ª SECC. De Los Pinos<br />
                            San Antonio De La Cal, Oaxaca De Juárez<br />
                            <a href="tel:951 393 6290">951 393 6290</a> <br />
                            <a href="mailto:#0">contacto@constructoralunanueva.com</a>
                        </p>
                        </div>
                        <div className="column w-1000-stack">
                        <a href="#0" className="btn btn--download">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                            Descargar Catalogo
                        </a>
                        </div>
                 </div>
            </div>
        </div> {/* end row */}
        </section> {/* end s-about */}
        </>
    )
  }
}