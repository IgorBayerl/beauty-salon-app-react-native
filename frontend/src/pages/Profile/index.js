import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [schedules, setSchedules] = useState([]);

    const history = useHistory();


    useEffect(() => {
        listSchedules()
    }, [schedules]);


    async function listSchedules() {
        console.log('testeee')
        const response = await api.get('list')
        setSchedules(response.data)
        console.log(response.data)
    }

    async function deleteAll() {
        await api.delete('delete')
        setSchedules([])
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }




    return (
        <div className="profile-container">
            <header>
                <img onClick={listSchedules} src={logoImg} alt="Be The Hero" />
                <span>Bem vinda</span>

                <Link className="button" onClick={deleteAll}>Limpar agenda</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Agendamentos</h1>

            <ul>
                {schedules.map(schedules => (
                    <li>
                        <strong>{schedules.name}</strong>
                        <p>{schedules.date}</p>

                        <p>{schedules.array}</p>

                    </li>
                ))}
            </ul>
        </div>
    )
}