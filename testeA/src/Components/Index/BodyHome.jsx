import React from 'react';
import '../../Styles/StylesIndex/BodyHomeStyle.css'
import img1 from '../../Images/ImgsServiços/1.png'
import img2 from '../../Images/ImgsServiços/2.png'
import img3 from '../../Images/ImgsServiços/3.png'
import img4 from '../../Images/ImgsServiços/4.png'
import img5 from '../../Images/ImgsServiços/5.png'


function BodyHome() {
    return (
        <div classNameName="container-body">
            <main className="main-second-home-page" >
                <div className="layout-ruler-4">
                    <div className="text-title-service">
                        <p>Conheça nossos serviços</p>
                    </div>
                    <div className="service-type1">
                        <img src={img1} alt="" />
                        <div className="service-describe-type">
                            <div className="describe-service">
                                <h1>Serviços de Mecânica</h1>
                                <p>Os serviços de mecânica incluem: funilaria, troca
                                    de peças e troca de óleo, entre outros.</p>
                                <button className="button-saiba-mais"><a href="">Saiba mais</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="service-type1">
                        <div className="service-describe-type">
                            <div className="describe-service-2">
                                <h1>Serviços de Limpeza</h1>
                                <p>Os serviços de limpeza incluem: limpeza de quarto, banheiro, cozinha, sala, lavagem de roupas, entre outros.</p>
                                <button className="button-saiba-mais"><a href="">Saiba mais</a></button>
                            </div>
                        </div>
                        <img src={img2} alt="" />
                    </div>
                    <div className="service-type1">
                        <img src={img3} alt="" />
                        <div className="service-describe-type">
                            <div className="describe-service">
                                <h1>Serviços de Hidráulica</h1>
                                <p>Os serviços de hidráulica incluem: desentupimento
                                    de calhas, canos, ralos e vasos sanitários e
                                    concerto de vazamentos.</p>
                                <button className="button-saiba-mais"><a href="">Saiba mais</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="service-type1">
                        <div className="service-describe-type">
                            <div className="describe-service-2">
                                <h1>Serviços de Obras</h1>
                                <p>Os serviços de obras incluem: reboco, pintura, reformas gerais, construção civil de pequeno porte, entre outros.</p>
                                <button className="button-saiba-mais"><a href="">Saiba mais</a></button>
                            </div>
                        </div>
                        <img src={img4} alt="" />

                    </div>
                    <div className="service-type1">
                        <img src={img5} alt="" />
                        <div className="service-describe-type">
                            <div className="describe-service">
                                <h1>Serviços de Elétrica</h1>
                                <p>Os serviços de elétrica incluem: fiação elétrica, troca e instalações de lâmpada, manutenção de disjuntores, entre outros.</p>
                                <button className="button-saiba-mais"><a href="">Saiba mais</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}
export default BodyHome;