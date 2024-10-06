import React, { useState } from 'react';
import styles from './input.module.css';

const Input = ({ addTask }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value); // Actualiza el estado con el valor del input
  };

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      addTask(inputText);  // Llama a la función que agrega la tarea
      setInputText('');    // Limpia el input después de enviar la tarea
    }
  };

  return (
    <div>
      <input className = {styles.input} 
        type="text" 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Ingresa una tarea" 
      />
      <button onClick={handleSubmit} className={styles.button}>
        Enviar
      </button>
    </div>
  );
}

export default Input;
