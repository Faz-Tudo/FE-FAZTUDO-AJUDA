import React, { useState } from 'react';
import '../../Styles/StylesCadastro/BodyCadastro01.css'
import img02 from '../../Images/Utilitarios/etapas-login-02.png';
import SweetAlertComponent from '../../FuctionsUtils/Alerts';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';

function BodyCadastroStep2({ onNextStep, onPrevStep, handleFormEdit, formData }) {
    const [formErrors, setFormErrors] = useState({}); // State to manage validation errors

    const isEmpty = Object.values(formData).some((value) => value === '');

    const removeMask = (value) => {
        // Remove os caracteres especiais (máscara) do valor
        return value.replace(/[^\d]/g, '');
      };
    // Function to handle form validation and submission
    const handleSubmit = () => {
        const errors = {};

        const handleFormEdit = (event, name) => {
            const value = event.target.value;
            setFormData({
              ...formData,
              [name]: name === 'cpf' || name === 'phone' ? removeMask(value) : value,
            });
          };

          if (isEmpty) {
            // SweetAlertComponent({
            //     title: 'Alerta',
            //     text: 'Por favor, preencha todos os campos.',
            //     icon: 'warning',
            //     buttonText: 'OK',
            //   });
            Swal.fire({
              text: 'Por favor, preencha todos os campos.',
              icon: 'warning',
              confirmButtonText: 'OK',
            });
           
          }

        // Input field validations
        if (!formData.name) {
            SweetAlertComponent({
                title: 'Alerta',
                text: 'Por favor insira seu primeiro nome.',
                icon: 'warning',
                buttonText: 'OK',
              });
        }

        if (!formData.lastName) {
            SweetAlertComponent({
                title: 'Alerta',
                text: 'Por favor insira seu sobrenome.',
                icon: 'warning',
                buttonText: 'OK',
              });
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            Swal.fire({
        text: 'Ocorreu um erro: ' + error.message,
        icon: 'error',
        confirmButtonText: 'OK',
      });
        }

        if (!/^\d+$/.test(formData.phone)) {
            SweetAlertComponent({
                title: 'Alerta',
                text: 'Por favor insira um telefone valido.',
                icon: 'warning',
                buttonText: 'OK',
              });
        }

        if (!formData.cpf) {
            SweetAlertComponent({
            title: 'Alerta',
            text: 'Por favor insira um CPF valido.',
            icon: 'warning',
            buttonText: 'OK',
          });
        }

        // Checkbox validation
        if (!formData.checkboxChecked) {
            SweetAlertComponent({
                title: 'Alerta',
                text: 'Assinale uma alternativa.',
                icon: 'warning',
                buttonText: 'OK',
              });
            errors.checkbox = "Assinale uma alternativa";
        }

        // Update the state with validation errors
        setFormErrors(errors);

        // Proceed to the next step if there are no errors
        if (Object.keys(errors).length === 0) {
            onNextStep();
        }
    };

    return (
        <div className="body-login-all-things">
            <div className="steps-login-numbers">
                <div className="steps-login-img">
                    <img src={img02} alt="" />
                </div>
            </div>
            <div className="part-form-create-profile">
                <div className="box-form-create-profile">
                    <div className="part-one-title">
                        <p>Criando seu perfil ...</p>
                    </div>
                    <div className="part-two-subtitle">
                        <p>Insira seus dados</p>
                    </div>
                    <div className="part-three-inputs">
                        <div className="part-left-inputs">
                            <input
                                type="text"
                                placeholder="Primeiro nome"
                                value={formData.name}
                                onChange={(e) => {
                                    handleFormEdit(e, 'name');
                                }}
                            />
                            {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                            <input
                                type="text"
                                placeholder="Seu sobrenome"
                                required
                                value={formData.lastName}
                                onChange={(e) => {
                                    handleFormEdit(e, 'lastName');
                                }}
                            />
                            {formErrors.lastName && <p className="error-message">{formErrors.lastName}</p>}
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={(e) => {
                                    handleFormEdit(e, 'email');
                                }}
                            />
                            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                            <InputMask
                                mask="(99) 99999-9999"
                                type="text"
                                placeholder="(XX) XXXXX-XXXX"
                                required
                                value={formData.phone}
                                onChange={(e) => {
                                handleFormEdit(e, 'phone');
                                }}
                            />
                            {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
                        </div>
                        <div className="part-right-inputs">
                        <InputMask
                            mask="999.999.999-99"
                            type="text"
                            placeholder="CPF: exp.: 000.000.000-00"
                            required
                            value={formData.cpf}
                            onChange={(e) => {
                            handleFormEdit(e, 'cpf');
                            }}
                            />
                            {formErrors.cpf && <p className="error-message">{formErrors.cpf}</p>}
                            <label className='termos-check-box'>
                                <input
                                    type="checkbox"
                                    onChange={(e) => {
                                        handleFormEdit(e.target.checked, 'checkboxChecked');
                                    }}
                                />
                                Afirmo que os dados inseridos são verdadeiros
                            </label>
                            {formErrors.checkbox && <p className="error-message">{formErrors.checkbox}</p>}
                        </div>
                    </div>
                    <div className="part-four-submit-button">
                        <button
                            className="button-submit" onClick={onPrevStep}>
                            Voltar
                        </button>
                        <button className="button-submit"
                            onClick={handleSubmit}>
                            Continuar
                        </button>
                        {console.log(formData)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyCadastroStep2;
