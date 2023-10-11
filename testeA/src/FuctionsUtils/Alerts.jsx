import React from 'react';
import Swal from 'sweetalert2';

// const MySwal = withReactContent(Swal);

const SweetAlertComponent = ({ title, text, icon, buttonText }) => {
  const handleAlertClick = () => {
    MySwal.fire({
      title: title || 'Exemplo de SweetAlert',
      text: text || 'Este é um alerta personalizado com o SweetAlert e React!',
      icon: icon || 'success',
      confirmButtonText: buttonText || 'OK',
    });
  };

  return (
    <div>
      <button onClick={handleAlertClick}>Mostrar Alerta</button>
    </div>
  );
};

export default SweetAlertComponent;