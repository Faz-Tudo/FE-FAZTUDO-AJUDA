import React, { useState } from "react";
import '../../Styles/StylesCadastro/BodyCadastro01.css';
import img from '../../Images/Utilitarios/login-icon.png';
import axios from 'axios';
// import Navbar from '../../Components/Index/Navbar.jsx';
import SweetAlertComponent from '../../FuctionsUtils/Alerts';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        });
    }

    const handleForm = async (event) => {
        event.preventDefault();
        const isEmpty = Object.values(formData).some((value) => value === '');

        if (isEmpty) {
            SweetAlertComponent({
                title: 'Alerta',
                text: 'Por favor, preencha todos os campos.',
                icon: 'warning',
                buttonText: 'OK',
            });
            return;
        }

        console.log('Dados a serem enviados:', formData);

        try {
            const response = await axios.post('http://localhost:8080/auth/login', formData);

            if (response.status === 200) {
                SweetAlertComponent({
                    title: 'Sucesso',
                    text: 'Usuário autenticado',
                    icon: 'success',
                    buttonText: 'OK',
                });

                console.log('Usuário autenticado');
            }
        } catch (error) {
            if (error.response && error.response.status === 403) {
                SweetAlertComponent({
                    title: 'Erro',
                    text: 'Acesso proibido. Verifique suas credenciais.',
                    icon: 'error',
                    buttonText: 'OK',
                });
                console.log("Erro em e-mail ou senha");
            } else {
                SweetAlertComponent({
                    title: 'Erro',
                    text: 'Ocorreu um erro: ' + error.message,
                    icon: 'error',
                    buttonText: 'OK',
                });
                console.log(error);
            }
        }
    };

    return (
        <div className="body-login-all-things">
            <div className="steps-login-numbers">
                <div className="steps-login-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="part-form-create-profile">
                <div className="box-form-create-profile">
                    <div className="part-subtitle-login">
                        <p>Digite seu e-mail e senha do FazTudo.com</p>
                    </div>
                    <div className="part-three-inputs">
                        <div className="part-left-inputs">
                            <input 
                                type="email"
                                placeholder="E-mail" 
                                required 
                                value={formData.email} 
                                onChange={(e) => { handleFormEdit(e, 'email') }} />
                                
                            <input 
                                type="password" 
                                placeholder="Senha" 
                                required 
                                value={formData.senha}
                                onChange={(e) => { handleFormEdit(e, 'senha') }}
                            />
                        </div>
                    </div>
                    <div className="part-four-submit-button">
                        <button className="button-submit" onClick={handleForm}>Continuar</button>
                    </div>
                    <div className="footer-container-login">
                        <p>Não tem uma conta? <a href=""><b>Cadastre-se!</b ></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;