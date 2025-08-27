import React from 'react';
import Carousel from '../components/Carousel';

const HomePage = () => {
    return (
        <section>
            <div className="container">
                <h1>¿Listo para conocer NEMCATACOA?</h1>
                <p>Tecnologia que honra paises</p>
            </div>
            <Carousel />
        </section>
    );
};

export default HomePage;