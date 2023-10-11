import React from "react";
import '../../Styles/StylesIndex/Top3Style.css'
import img1 from'../../Images/Colaboradores/foto3x4-1.jpg';
import img2 from'../../Images/Colaboradores/foto3x4-2.jpg';
import img3 from'../../Images/Colaboradores/foto3x4-4.jpg';

function Top3Home() {
    return (
        <div className="body-home-all-things">
            <main className="main-first-home-page">
                <div className="layout-ruler-3">
                    <div className="text-title-top3">
                        <p>top melhores avaliados</p>
                    </div>
                    <div className="images-top3">
                        <div className="img-1">
                            <img src={img1} alt=""/>
                                <h2>Márcia</h2>
                                <p>Especialista em XPTO</p>
                        </div>
                        <div className="img-1">
                            <img src={img2} alt=""/>
                                <h2>Júlio</h2>
                                <p>Especialista em XPTO</p>
                        </div>
                        <div className="img-1">
                            <img src={img3} alt=""/>
                                <h2>Beto</h2>
                                <p>Especialista em XPTO</p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )

}
export default Top3Home;