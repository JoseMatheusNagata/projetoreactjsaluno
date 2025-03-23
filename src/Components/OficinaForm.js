import React, { useState } from 'react';
import './meucss.css'
const OficinaForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        curso: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className='gradiend-background'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>Idade:</label>
                    <input type="number" name="idade" value={formData.idade} onChange={handleChange} />
                </div>
                <div>
                    <label>Curso:</label>
                    <input type="text" name="curso" value={formData.curso} onChange={handleChange} />
                </div>
                <button type="submit">Submeter</button>
            </form>
            {submittedData && (
                <div>
                    <h2>Dados do Aluno:</h2>
                    <p>Nome: {submittedData.nome}</p>
                    <p>Idade: {submittedData.idade}</p>
                    <p>Curso: {submittedData.curso}</p>
                </div>
            )}
        </div>
    );
};

export default OficinaForm;