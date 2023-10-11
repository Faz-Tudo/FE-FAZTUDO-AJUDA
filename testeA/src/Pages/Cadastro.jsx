// import '../Styles/StylesIndex/global.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../Components/Index/Navbar.jsx';
// import SweetAlertComponent from 'FuctionsUtils/SweetAlertComponent.jsx';
// function Cadastro() {
//   const [formData, setFormData] = useState({
//     name: '',
//     lastName: '',
//     cpf: '',
//     state: '',
//     city: '',
//     phone: '',
//     email: '',
//     senha: '',
    
//   });

//   const handleFormEdit = (event, name) => {
//     setFormData({
//       ...formData,
//       [name]: event.target.value,
//     });
//   };

//   const handleForm = async (event) => {
//     event.preventDefault();
//     const isEmpty = Object.values(formData).some((value) => value === '');

    
//       if (isEmpty) {
//         SweetAlertComponent({
//           title: 'Alerta',
//           text: 'Por favor, preencha todos os campos.',
//           icon: 'warning',
//           buttonText: 'OK',
//         });
//         return;
//       }
    
//       console.log('Dados a serem enviados:', formData);
    
//       try {
//         const response = await axios.post('http://localhost:8080/auth/register', formData);
    
//         if (response.status === 201) {
//           SweetAlertComponent({
//             title: 'Sucesso',
//             text: 'Registro bem-sucedido!',
//             icon: 'success',
//             buttonText: 'OK',
//           });
    
//           console.log("Success! Register");
//         }
    
//         setTimeout(function () {
//           window.location.href = 'http://localhost:5173';
//         }, 1000);
//       } catch (error) {
//         if (error.response && error.response.status === 403) {
//           SweetAlertComponent({
//             title: 'Erro',
//             text: 'Impossível realizar o cadastro. Verifique as credenciais inseridas.',
//             icon: 'error',
//             buttonText: 'OK',
//           });
    
//           console.log("Informações incorretas ou já cadastradas no banco.");
//         } else {
//           SweetAlertComponent({
//             title: 'Erro',
//             text: 'Ocorreu um erro: ' + error.message,
//             icon: 'error',
//             buttonText: 'OK',
//           });
    
//           console.log(error);
//         }
//       }
//     };

//   return (
//     <div className='all-things'>
//       <Navbar></Navbar>
//       <div className='co-container'>
//         <div className="container">
//           <header className="header">
//             <span>Cadastre-se</span>
//           </header>
//           <form>
//             <div className="input-container">
//               <input
//                 type="text"
//                 placeholder="Seu nome"
//                 required
//                 value={formData.name}
//                 onChange={(e) => {
//                   handleFormEdit(e, 'name');
//                 }}
//               />
//             </div>
//             <div className="input-container">
//               {/* <input */}
//                 type="text"
//                 placeholder="Seu sobrenome"
//                 required
//                 value={formData.lastName}
//                 onChange={(e) => {
//                   handleFormEdit(e, 'lastName');
//                 }}
//               />
//             </div>
//             <div className="input-container">
//               <input
//                 mask="999.999.999-99"
//                 type="text"
//                 placeholder="CPF: exp.: 000.000.000-00"
//                 required
//                 value={formData.cpf}
//                 onChange={(e) => {
//                   handleFormEdit(e, 'cpf');
//                 }}
//               />
//             </div>
//             <div className="input-container">
//               <input
//                 type="text"
//                 placeholder="Estado"
//                 required
//                 value={formData.state}
//                 onChange={(e) => {
//                   handleFormEdit(e, 'state');
//                 }}
//               />
//             </div>
//             <div className="input-container">
//               <input
//                 type="text"
//                 placeholder="Cidade"
//                 required
//                 value={formData.city}
//                 onChange={(e) => {
//                   handleFormEdit(e, 'city');
//                 }}
//               />
//             </div>
//             <div className="input-container">
//               <input
//                 mask="(99) 99999-9999"
//                 type="text"
//                 placeholder="(XX) XXXXX-XXXX"
//                 required
//                 value={formData.phone}
//                 onChange={(e) => {
//                   handleFormEdit(e, 'phone');
//                 }}
//               />
//             </div>
//             <div className="input-container">
//               <input
//                 type="email"
//                 placeholder="emailExemplo@gmail.com"
//                 required
//                 value={formData.email}
//                 onChange={(e) => {
//                   handleFormEdit(e, 'email');
//                 }}
//               />
//             </div>

//             <div className="input-container">
//               <input
//                 type="password"
//                 placeholder="Crie sua senha"
//                 required
//                 value={formData.senha}
//                 onChange={(e) => {
//                   handleFormEdit(e, 'senha');
//                 }}
//               />
//             </div>
//             <div className="button-container">
//               <button className="button-container" onClick={handleForm}>
//                 Salvar
//               </button>
//             </div>
//             <div className="footer">
//               <p>
//                 Já tem login? <a href="<Login/>"><b>Clique Aqui!</b ></a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cadastro;
