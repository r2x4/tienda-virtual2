import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/crearCuenta.css';

const CrearCuenta = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        correo: '',
        telefono: '',
        ciudad: '',
        pais: '',
        usuario: '',
        password: '',
        confirmarPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmarPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const nuevoUsuario = {
            ...formData,
            fechaHora: new Date().toLocaleString(),
        };

        const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExistente = usuariosGuardados.find(
            (usuario) => usuario.usuario === formData.usuario
        );

        if (usuarioExistente) {
            alert('Este usuario ya existe. Elige otro nombre de usuario.');
            return;
        }

        usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

        alert('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
        navigate('/');
    };

    return (
        <div className="crear-cuenta-container">
            <section className="crear-cuenta-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Name"
                        required
                    />
                    <label htmlFor="apellidos">Apellidos</label>
                    <input
                        type="text"
                        id="apellidos"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                    />
                    <label htmlFor="correo">Correo electrónico</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleInputChange}
                        placeholder="Email"
                        required
                    />
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="Phone"
                    />
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleInputChange}
                        placeholder="City"
                    />
                    <label htmlFor="pais">País</label>
                    <input
                        type="text"
                        id="pais"
                        name="pais"
                        value={formData.pais}
                        onChange={handleInputChange}
                        placeholder="Country"
                    />
                    <label htmlFor="usuario">Usuario</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        value={formData.usuario}
                        onChange={handleInputChange}
                        placeholder="Username"
                        required
                    />
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                    />
                    <label htmlFor="confirmarPassword">Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="confirmarPassword"
                        name="confirmarPassword"
                        value={formData.confirmarPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                        required
                    />
                    <button type="submit" className="submit-btn">Crear Cuenta</button>
                </form>
            </section>
        </div>
    );
};

export default CrearCuenta;



