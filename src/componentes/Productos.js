import React from 'react';
import ProductCard from './ProductCard';
import BlogCard from './BlogCard';
import '../css/Productos.css';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPersonBiking, faPen, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../texto/cartTexto';  // Importar el hook del carrito

const images = {
    logo: require('../ImagenesLogo/logo.jpg'),
    fondo2: require('../ImagenesLogo/Fondo2.jpg'),
    // Calzado
    tennis1: require('../ImagenesCalzadoDeportivo/tennis1.jpg'),
    tennis2: require('../ImagenesCalzadoDeportivo/tennis2.jpg'),
    tennis3: require('../ImagenesCalzadoDeportivo/tennis3.jpg'),
    tennisAdidas: require('../ImagenesCalzadoDeportivo/TennisAdidas1.jpg'),
    tennisDama: require('../ImagenesCalzadoDeportivo/TennisDama1.jpg'),
    // Ropa_Deportiva
    buzo1: require('../ImagenesRopaDeportiva/Buzo1.jpg'),
    buzo2: require('../ImagenesRopaDeportiva/Buzo2.jpg'),
    pantaloneta: require('../ImagenesRopaDeportiva/Pantaloneta1.jpg'),
    adidasNegra: require('../ImagenesRopaDeportiva/Sudadera1.jpg'),
    sudaderaAdidas: require('../ImagenesRopaDeportiva/ropaDeportiva.jpg'),
    ropaDeportiva: require('../ImagenesRopaDeportiva/ropaDeportiva.jpg'),
    // Implementos
    balonFutbol: require('../ImagenesImplementosDeportivos/Balon_Futbol.jpg'),
    balonBaloncesto: require('../ImagenesImplementosDeportivos/Balon_Baloncesto.jpg'),
    peraBoxeo: require('../ImagenesImplementosDeportivos/Pera_Boxeo.jpg'),
    sacoBoxeo: require('../ImagenesImplementosDeportivos/Saco_Boxeo.jpg'),
    bicicletas: require('../imagenesProductos/bici1.jpg'),
    // Suplementos
    suplementos: require('../ImagenesSuplementosDeportivos/Suplementos.jpg'),
    aminoacidos: require('../ImagenesSuplementosDeportivos/Aminoacidos.jpg'),
    creatina: require('../ImagenesSuplementosDeportivos/Creatina.jpg'),
    proteina: require('../ImagenesSuplementosDeportivos/Proteina_Whey.jpg')
};

const Productos = () => {
    const { addToCart, getCartItemCount } = useCart();  // Desestructuramos addToCart y getCartItemCount del hook

    // Función para agregar al carrito
    const handleAddToCart = (product) => {
        addToCart(product); // Usamos el hook para agregar el producto al carrito
    };

    return (
        <main id="top" className="main-content">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <FontAwesomeIcon icon={faPersonBiking} className="logo" />
                    <h6 className="header-title">Numero 1<br />Sport Five</h6>
                    {/* Navegación */}
                    <nav className="nav-links">
                        <a href="/crear-cuenta">Crea tu Cuenta</a>
                        <a href="/carrito" className="cart-link">
                            <FontAwesomeIcon icon={faCartShopping} />
                            {/* Mostrar el número de productos en el carrito */}
                            {getCartItemCount() > 0 && <span className="cart-count">{getCartItemCount()}</span>}
                        </a>
                        <div className="dropdown">
                            <button className="dropbtn">Categoría</button>
                            <div className="dropdown-content">
                                <a href="/calzado-deportivo">Calzado Deportivo</a>
                                <a href="/articulos-deportivos">Implementos Deportivos</a>
                                <a href="/prendas-deportivas">Ropa Deportiva</a>
                                <a href="/suplementos-deportivos">Suplementos Deportivos</a>
                            </div>
                        </div>
                        <a href="/ofertas">Ofertas</a>
                        <div className="search-write">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                            <input type="text" placeholder="Buscar productos..." />
                            <FontAwesomeIcon icon={faPen} className="icon" />
                        </div>
                    </nav>
                </div>
            </header>

            {/* Productos más vendidos */}
            <section className="top-products">
                <h1 className="heading-1">Productos más Vendidos</h1>
                <div className="container-products">
                    <ProductCard 
                        imgSrc={images.tennis3} 
                        title="Calzado Deportivo" 
                        noCartIcon={true} 
                    />
                    <ProductCard 
                        imgSrc={images.ropaDeportiva} 
                        title="Ropa Deportiva" 
                        noCartIcon={true} 
                    />
                    <ProductCard 
                        imgSrc={images.bicicletas} 
                        title="Implementos Deportivos" 
                        noCartIcon={true} 
                    />
                    <ProductCard 
                        imgSrc={images.creatina} 
                        title="Suplementos Deportivos"  
                        noCartIcon={true}   
                    />
                </div>
            </section>

            {/* Galería de productos */}
            <section className="gallery">
                <h1 className="heading-1">Galería de Productos</h1>
                <div className="gallery-images">
                    <img src={images.balonFutbol} alt="Implementos Deportivos" className="gallery-img" />
                    <img src={images.tennis1} alt="Tennis" className="gallery-img" />
                    <img src={images.ropaDeportiva} alt="Ropa Deportiva" className="gallery-img" />
                    <img src={images.creatina} alt="Suplemtos Deportivos" className="gallery-img" />
                    <img src={images.tennis2} alt="Tennis" className="gallery-img" />
                    <img src={images.sacoBoxeo} alt="Implemetos Deportivos" className="gallery-img" />
                    <img src={images.balonBaloncesto} alt="Implementos Deportivos" className="gallery-img" />
                    <img src={images.buzo1} alt="Ropa Deportiva" className="gallery-img" />
                    <img src={images.peraBoxeo} alt="Implementos Deportivos" className="gallery-img" />
                    <img src={images.pantaloneta} alt="Ropa Deportiva" className="gallery-img" />
                    <img src={images.proteina} alt="Suplemento Deportivo" className="gallery-img" />
                    <img src={images.tennis3} alt="Tennis" className="gallery-img" />
                    <img src={images.aminoacidos} alt="Suplementos Deportivos" className="gallery-img" />
                    <img src={images.adidasNegra} alt="Zapatos Deportivos" className="gallery-img" />
                    <img src={images.buzo2} alt="Ropa Deportiva" className="gallery-img" />
                    <img src={images.pantaloneta} alt="Ropa Deportiva" className="gallery-img" />
                </div>
            </section>

            {/* Productos recién llegados */}
            <section className="container specials">
                <h1 className="heading-1">Llegados Recientemente</h1>
                <div className="container-products">
                    <ProductCard 
                        imgSrc={images.tennis3} 
                        title="Zapatillas Puma" 
                        price="$410,000" 
                        discount="8%" 
                        id="product-calzado3" 
                        onAddToCart={() => handleAddToCart({ id: 'product-calzado3', title: 'Zapatillas Puma', price: '$410,000', imgSrc: images.tennis3 })} 
                    />
                    <ProductCard 
                        imgSrc={images.balonFutbol} 
                        title="Balon FPC" 
                        price="$150,000" 
                        discount="10%" 
                        id="prod-7" 
                        onAddToCart={() => handleAddToCart({ id: 'prod-7', title: 'Balon FPC', price: '$100,000', imgSrc: images.balonFutbol })} 
                    />
                    <ProductCard 
                        imgSrc={images.adidasNegra} 
                        title="Sudadera Adidas" 
                        price="$250,000" 
                        discount="5%" 
                        id="prod-8" 
                        onAddToCart={() => handleAddToCart({ id: 'prod-8', title: 'Tennis Adidas', price: '$250,000', imgSrc: images.adidasNegra })} 
                    />
                    <ProductCard 
                        imgSrc={images.pantaloneta} 
                        title="Pantaloneta Adidas" 
                        price="$220,000" 
                        discount="3%" 
                        id="prod-9" 
                        onAddToCart={() => handleAddToCart({ id: 'prod-9', title: 'Balon FPC', price: '$220,000', imgSrc: images.pantaloneta })} 
                    />
                </div>
            </section>

            {/* Blogs */}
            <section className="container blogs">
                <h1 className="heading-1">Últimos Blogs</h1>
                <div className="container-blogs">
                    <BlogCard 
                        imgSrc={images.fondo2} 
                        title="Aditamentos Deportivos" 
                        date="29 Enero 2024" 
                        description="Son objetos, prendas y accesorios que requiere una persona para practicar o desarrollar actividades físicas de tipo deportivo..." 
                    />
                    <BlogCard 
                        imgSrc={images.tennis3} 
                        title="Calzado Deportivo" 
                        date="7 Noviembre 2023" 
                        description="El calzado deportivo sirve para proteger el pie de roces y abrasiones, ejercer un efecto amortiguador entre éste y el suelo..." 
                    />
                    <BlogCard 
                        imgSrc={images.ropaDeportiva} 
                        title="Ropa Deportiva" 
                        date="23 Julio 2021" 
                        description="La ropa deportiva debe de ser capaz de reducir gran parte del impacto generado al realizar una actividad física..." 
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <section className="footer-links">
                    <a href="#top">Ir al inicio</a>
                    <a href="mailto:rrs230780@gmail.com">Contáctame aquí</a>
                </section>
                <section className="social-media">
                    <h1 className="heading-1">Síguenos en Redes Sociales</h1>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </section>
                <p>&copy; 2024 Sport Five. Todos los derechos reservados.</p>
            </footer>
        </main>
    );
};

export default Productos;






