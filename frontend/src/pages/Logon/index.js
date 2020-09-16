import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }


    }


    return (
        <div className="logon-container">
            <div className="content">
                <section className="form">
                    <img className="logo" src={logoImg} alt="Be The Hero" />

                    <form onSubmit={handleLogin}>
                        <h1>Faça seu logon</h1>
                        <input
                            placeholder="Restaurant User"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                        <input
                            placeholder="Senha"
                            value={id}
                        // onChange={e => setId(e.target.value)}
                        />

                        <Link className="button" type="submit" to="/Profile">Entrar</Link>
                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#E02041" />
                          Não tenho conta
                    </Link>
                    </form>
                </section>
            </div>
        </div>
    )
}