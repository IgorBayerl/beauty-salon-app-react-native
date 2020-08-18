import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [schedules, setSchedules] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        listSchedules()
    }, [schedules]);


    async function listSchedules() {
        const response = await api.get('list')
        setSchedules(response.data)
        console.log(response.data)
    }

    async function deleteAll() {
        const response = await api.delete('delete')
        setSchedules([])
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }




    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
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