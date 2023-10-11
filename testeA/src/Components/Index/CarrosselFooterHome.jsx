import React from 'react';
import '../../Styles/StylesIndex/CarrosselFooter.css'

function CarrosselFooterHome({ images }) {
    return (
        <div className="carousel-container">
            <div className="carousel">
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img className='img-carrossel' src={image} alt={`Imagem ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarrosselFooterHome;
