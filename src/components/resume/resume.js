import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <>
        {/* resume
            ================================================== */}
        <section id="resume" className="s-resume target-section">
        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
                <h3 className="section-header-allcaps">Obras</h3>
            </div>
            <div className="column large-9 tab-12">
                <div className="resume-block">
                    <div className="resume-block__header">
                        <h4 className="h3">CONTRATO No 12R100-RP-013BIS/2020 </h4>
                        <p className="resume-block__header-meta">
                            <span>COMISION ESTATAL DEL AGUA </span> 
                            <span className="resume-block__header-date">
                            August 2019 - Present
                            </span>
                        </p>
                    </div>
                    <p>
                    PERFORACION DE POZO PROFUNDO, EN SAN PABLO AYUTLA OAXACA. 
                    $ 1,189,937.78 
                    </p>
                </div> {/* end resume-block */}                    
            </div>
        </div> {/* s-resume__section */}
        </section> {/* end s-resume */}
        </>
    )
  }
}