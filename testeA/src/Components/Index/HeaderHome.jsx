import React from 'react';
import '../../Styles/StylesIndex/HeaderHomeStyle.css';

function HeaderHome() {
    return (
        <div className='body-home-all-things'>
            <header className="header-first-home-page">
                <div className="layout-ruler-1">
                    <div className="text-wave">
                        <h2>Conectando Habilidades,
                            Transformando Vidas: </h2>
                        <h1>FAZTUDO.com</h1>
                        <p>O Caminho Moderno para o Trabalho Autônomo</p>
                        <button className="button-register"><a href="">Cadastre-se</a></button>
                    </div>
                </div>
                <div className="layout-ruler-2">
                    <div className="carrosel">
                    </div>
                </div>
            </header>
        </div>
    )
}
export default HeaderHome;