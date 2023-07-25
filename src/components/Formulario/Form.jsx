// src/Form.js
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(''); // Estado para la opción desplegable (select)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Género:', gender);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='div'>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='div'>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='div'>
        <label>Género:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Seleccionar</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <button className='button' type="submit">Enviar</button>
    </form>
  );
};

export default Form;
