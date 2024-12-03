import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/inicio.css';

const Inicio = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [recordar, setRecordar] = useState(false);

    useEffect(() => {
        const savedUser = localStorage.getItem('usuario');
        const savedPassword = localStorage.getItem('password');
        const savedRemember = localStorage.getItem('recordar');
        if (savedRemember === 'true') {
            setUsuario(savedUser);
            setPassword(savedPassword);
            setRecordar(true);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "usuario") setUsuario(value);
        if (name === "password") setPassword(value);
    };

    const handleRecordarChange = (e) => {
        setRecordar(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioValido = usuarios.find(
            (user) => user.usuario === usuario && user.password === password
        );

        if (usuarioValido) {
            if (recordar) {
                localStorage.setItem('usuario', usuario);
                localStorage.setItem('password', password);
                localStorage.setItem('recordar', 'true');
            } else {
                localStorage.removeItem('usuario');
                localStorage.removeItem('password');
                localStorage.setItem('recordar', 'false');
            }
            navigate('/productos');
        } else {
            alert('Usuario o contraseña incorrectos');
            setUsuario('');
            setPassword('');
        }
    };

    const handleGoToCrearCuenta = () => {
        navigate('/crear-cuenta');
    };

    return (
        <div className="inicio-container">
            <h1 className="main-title">Sport Five Tienda Deportiva</h1>
            <section className="right-form">
                <h2>Ingreso Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="usuario">Usuario</label>
                    <input
                        type="text"
                        name="usuario"
                        id="usuario"
                        value={usuario}
                        onChange={handleInputChange}
                        placeholder="User"
                        required
                    />
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                    />
                    <div className="check">
                        <input
                            type="checkbox"
                            checked={recordar}
                            onChange={handleRecordarChange}
                        />
                        <span>Recordar</span>
                    </div>
                    <button type="submit" className="button-direction">Ingreso</button>
                    <p>Estoy de acuerdo con <a href="/terminos-y-condiciones">Términos y Condiciones</a></p>
                    <button type="button" onClick={handleGoToCrearCuenta} className="create-account-btn">
                        ¿Crea tu Cuenta?
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Inicio;










