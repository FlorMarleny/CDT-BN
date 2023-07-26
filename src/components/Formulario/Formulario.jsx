import React, { useState } from 'react';
import './Formulario.css'; // Importa el archivo de estilos CSS

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    sede: '',
    comentario: '',
    terminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar cualquier otra acción necesaria
    console.log(formData);
  };

  return (
    <div className="containe">
      <h2 className="text-center mb-4 title-form">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombres</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="sede">Sede</label>
          <select id="sede" name="sede" value={formData.sede} onChange={handleChange} required>
            <option value="">Seleccionar Sede</option>
            <option value="Sede 1">Sechura</option>
            <option value="Sede 2">Pacasmayo</option>
            <option value="Sede 2">Tembladera</option>
            {/* Agregar más opciones de sede aquí */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comentario">Comentario</label>
          <textarea id="comentario" name="comentario" value={formData.comentario} onChange={handleChange} required />
        </div>
        <div className="form-check mb-4">
          <input type="checkbox" id="terminos" name="terminos" checked={formData.terminos} onChange={handleChange} required />
          <label htmlFor="terminos">He leído y acepto los términos y condiciones</label>
        </div>
        <button type="submit" className="button btn-primary">Solicitar Información</button>
      </form>
    </div>
  );
};

export default Formulario;
