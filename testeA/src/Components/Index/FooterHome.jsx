import React from "react";
import '../../Styles/StylesIndex/FooterStyle.css'
import patrocinador1 from '../../Images/Apoiadores/arteb-logo.png';
import patrocinador2 from '../../Images/Apoiadores/intelbras-logo.png';
import patrocinador3 from '../../Images/Apoiadores/Leroy_Merlin-logo.png';
import patrocinador4 from '../../Images/Apoiadores/logo-ype.png';
import patrocinador5 from '../../Images/Apoiadores/Makita-Logo.png';
import patrocinador6 from '../../Images/Apoiadores/tigre-logo.png';
import Carrossel from './CarrosselFooterHome.jsx'

function FooterHome() {
    const patrocinadores = [patrocinador1, patrocinador2, patrocinador3, patrocinador4, patrocinador5, patrocinador6,
        patrocinador1, patrocinador2, patrocinador3, patrocinador4, patrocinador5, patrocinador6];

    return (
        <div className="body-home-all-things">
            <footer className="footer-first-home-page">
                <h1>Principais Apoiadores</h1>
                <Carrossel images={patrocinadores}></Carrossel>
            </footer>
        </div>

    )
}
export default FooterHome;