import React from 'react';
import '../../Styles/StylesCadastro/BodyCadastro01.css'
import img03 from '../../Images/Utilitarios/etapas-login-03.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import TelaLogin from '../../Pages/Login2';
import SweetAlertComponent from '../../FuctionsUtils/Alerts';


function BodyCadastroStep3({ onPrevStep, handleFormEdit, formData }) {

    const {
        name,
        lastName,
        cpf,
        state,
        city,
        phone,
        email,
        senha,
    } = formData;

    const { register, setValue } = useForm();

    //consulta em API externa
    const checkCEP = async (e) => {
        const cep = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do valor do CEP
        console.log(cep);
        fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)

            .then(res => res.json())
            .then(data => {
                console.log(data);


                setValue('state', data.state);
                setValue('city', data.city);
                setValue('street', data.street);
                setValue('neighborhood', data.neighborhood);

            }).catch(error => {
                console.error(error);

            });
    }
    let currentTelaLogin;

    const handleSubmit = async () => {
        const errors = {};

        if (!formData.cep) {
            SweetAlertComponent({
                title: 'Alerta',
                text: 'Por favor, insira o CEP.',
                icon: 'warning',
                buttonText: 'OK',
              });
        }
    
        if (!formData.city) {
            SweetAlertComponent({
                title: 'Alerta',
                text: 'Por favor, insira a cidade.',
                icon: 'warning',
                buttonText: 'OK',
              });
        }
    
        if (!formData.state) {
            SweetAlertComponent({
                title: 'Alerta',
                text: 'Por favor, insira o estado.',
                icon: 'warning',
                buttonText: 'OK',
              });
        }
    
        if (!formData.senha) {
            SweetAlertComponent({
                title: 'Alerta',
                text: 'Por favor, insira a senha.',
                icon: 'warning',
                buttonText: 'OK',
              });
        }
    
        if (!formData.termsChecked) {
            SweetAlertComponent({
                title: 'Alerta',
                text: 'Por favor, concorde com os termos e condições.',
                icon: 'warning',
                buttonText: 'OK',
              });
        }
    
        setFormErrors(errors);
    
        // Se não houver erros de validação, envie o formulário
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('URL_DO_SERVIDOR', formData);
                console.log('Dados a serem enviados:', formData);
    
                if (response.status === 201) {
                    // Redirecione ou faça algo após o envio bem-sucedido
                    SweetAlertComponent({
                        title: 'Sucesso',
                        text: 'Dados enviados com sucesso!.',
                        icon: 'success',
                        buttonText: 'OK',
                      });
                    console.log('Dados enviados com sucesso!');
                    currentTelaLogin = <TelaLogin />;
                }
            } catch (error) {
                if (error.response.status === 403) {
                    SweetAlertComponent({
                        title: 'Alerta',
                        text: 'Não foi possível realizar o cadastro. Confira as informações',
                        icon: 'warning',
                        buttonText: 'OK',
                      });
                    alert("Não foi possível realizar o cadastro.");
                    console.log("Informações incorretas ou já cadastradas no banco.");
                } else {
                    alert("Ocorreu um erro: " + error.message);
                    console.log(error);
                }
            }
        }
    };
    

    return (
        <div className="body-login-all-things">
            <div className="steps-login-numbers">
                <div className="steps-login-img">
                    <img src={img03} alt="" />
                </div>
            </div>
            <div className="part-form-create-profile">
                <div className="box-form-create-profile">
                    <div className="part-one-title">
                        <p>Criando seu perfil ...</p>
                    </div>
                    <div className="part-two-subtitle">
                        <p>Insira seus dados de endereço</p>
                    </div>
                    <div className="part-three-inputs">
                        <div className="part-left-inputs">
                            <input
                                type="text"
                                placeholder="CEP"
                                onBlur={checkCEP}
                                required
                                value={formData.cep}
                                onChange={(e) => {
                                    handleFormEdit(e, 'cep');
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Cidade"
                                {...register("city")}
                                required
                                value={formData.city}
                                onChange={(e) => {
                                    handleFormEdit(e, 'city');
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Rua"
                                name="street"
                                {...register("street")}
                            // value={formData.street}
                            // onChange={(e) => {
                            //     handleFormEdit(e, 'street');
                            // }}
                            />
                            <input type="text"
                                placeholder="Bairro"
                                name="neighborhood"
                                {...register("neighborhood")}
                            // value={formData.neighborhood}
                            // onChange={(e) => {
                            //     handleFormEdit(e, 'neighborhood');
                            // }}
                            />
                        </div>
                        <div className="part-right-inputs">
                            <input
                                type="text"
                                placeholder="Estado"

                                required
                                value={formData.state}
                                onChange={(e) => {
                                    handleFormEdit(e, 'state');
                                }}
                                {...register("state")}
                            />
                            <input type="password"
                                placeholder="Crie uma senha"
                                required
                                value={formData.senha}
                                onChange={(e) => {
                                    handleFormEdit(e, 'senha');
                                }}
                            />
                            <input type="password"
                                placeholder="Repita a senha"
                            />
                            <label className='termos-check-box'>
                                <input type="checkbox"
                                />
                                Li e concordo com os termos e condições
                            </label>
                        </div>
                    </div>
                    <div className="part-four-submit-button">
                        <button
                            className="button-submit" onClick={onPrevStep}>
                            Voltar
                        </button>
                        <button
                            className="button-submit" onClick={handleSubmit}>
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
            {currentTelaLogin}
        </div>
    )
}

export default BodyCadastroStep3;