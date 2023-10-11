/* eslint-disable no-unused-vars */
import React from "react";
import '../../Styles/StylesCadastro/BodyCadastro01.css';
// import '../../Styles/global.css
import img01 from '../../Images/Utilitarios/etapas-login-01.png';   

function BodyCadastroStep1({ onNextStep, tipoCad}) {

    return (
        <div className="body-login-all-things">
            <div className="steps-login-numbers">
                <div className="steps-login-img">
                    <img src={img01} alt="" />
                </div>
            </div>
            <div className="part-form-create-profile">
                <div className="box-form-create-profile">
                    <div className="part-one-title">
                        <p>Criando seu perfil ...</p>
                    </div>
                    <div className="part-two-subtitle">
                        <p>Escolha seu tipo de perfil</p>
                    </div>
                    <div className="part-three-buttons">
                        <button
                            className="button-contratar"
                            onClick={tipoCad}>
                            Quero contratar
                        </button>
                        <button
                            className="button-trabalhar">
                            Quero trabalhar
                        </button>
                    </div>
                    <div className="part-four-submit-button">
                        <button
                            className="button-submit"
                            style={{ background: "rgba(192, 181, 173, 0.53)", color:"grey"}}
                            >
                            Voltar
                        </button>
                        <button
                            className="button-submit"
                            onClick={onNextStep}>
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default BodyCadastroStep1;