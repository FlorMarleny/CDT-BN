import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useDarkMode } from "../../DarkModeContext";
import './Formulario.css';

const Formulario = () => {

  const { isDarkMode } = useDarkMode();

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    sede: '',
    comentario: '',
    terminos: false,
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_7o6cf5e'; // Reemplaza con el Service ID de EmailJS
    const templateID = 'template_1g30hgy'; // Reemplaza con el Template ID de EmailJS
    const publicKey = 'B-ZyntCHH6UNbVyZ_';

    const sedes = {
      "Sechura": "mendozasoliscarlos44@gmail.com",
      "Pacasmayo": "carlos.mendoza.s@ieee.org",
      "Tembladera": "correo_sede3@example.com",
    };

    const sedeEmail = sedes[formData.sede];

    const emailData = {
      from_name: formData.nombre + ' ' + formData.apellidos,
      to_name: formData.sede,
      to_email: sedeEmail,
      message: formData.comentario,
    };

    emailjs.send(serviceID, templateID, emailData, publicKey)
      .then((response) => {
        console.log('Correo enviado:', response);
        setEnviado(true);
        setFormData({
          nombre: '',
          apellidos: '',
          correo: '',
          sede: '',
          comentario: '',
          terminos: false,
        });
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  };

  return (
    <div className={`contenedor ${isDarkMode ? "dark-mode-content" : "light-mode-content"}`}>
      <div className='containe'>
        <h2 className="text-center mb-4 title-form">Formulario de Contacto</h2>
        {enviado ? (
          <p className="text-success">El correo ha sido enviado exitosamente.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombres</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className={formData.nombre.trim() !== '' ? 'has-text' : ''} required />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} className={formData.apellidos.trim() !== '' ? 'has-text' : ''} required />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo</label>
              <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="sede">Centros</label>
              <select id="sede" name="sede" value={formData.sede} onChange={handleChange} required>
                <option value="" disabled >Seleccionar lugar</option>
                <option value="Sechura">Sechura</option>
                <option value="Pacasmayo">Pacasmayo</option>
                <option value="Tembladera">Tembladera</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="comentario">Comentario</label>
              <textarea id="comentario" name="comentario" value={formData.comentario} onChange={handleChange} required />
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="terminos" name="terminos" checked={formData.terminos} onChange={handleChange} required />
              <label className="form-check-label" htmlFor="terminos">He leído y acepto la <a className="efecto-politicas" href='#' >Política de Privacidad</a></label>
            </div>
            <button type="submit" className="button">Solicitar Información</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Formulario;
