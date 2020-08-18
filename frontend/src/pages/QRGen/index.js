import React, { useState, ReactPropTypes } from 'react';

import { QRCode } from 'react-qr-svg';
import './styles.css';



export default function QRGen() {
    const [number, setNumber] = useState('');
    const [id, setId] = useState('');
    const [logo, setLogo] = useState('');
    const [name, setName] = useState('');




    return (
        <div className="QR-container" >
            <div className="content">
                <div className="container_L">
                    <form>
                        <label >
                            <input
                                type="text"
                                placeholder="Restaurant ID"
                                value={id}
                                onChange={e => setId(e.target.value)}

                            />

                            <input
                                type="text"
                                placeholder="Código da mesa"
                                value={number}
                                onChange={e => setNumber(e.target.value)}

                            />

                            <input
                                type="text"
                                placeholder="Restaurant Name"
                                value={name}
                                onChange={e => setName(e.target.value)}

                            />
                            <input
                                type="text"
                                placeholder="Restaurant Logo"
                                value={logo}
                                onChange={e => setLogo(e.target.value)}

                            />

                        </label>
                        <input
                            type="submit"
                            value="Enviar"

                        />

                    </form>
                </div>
                <div className="container_R">
                    <div >
                        <QRCode
                            level="Q"
                            style={{ width: 256 }}
                            value={JSON.stringify({
                                id: String(id),
                                sit_code: String(number),
                                name: String(name),
                                logo: logo
                            })}
                        />
                    </div>
                    <br />
                    <p>
                        id = {id}<br />
                        number = {number}<br />
                        name = {name}<br />

                    </p>
                    <img
                        src={logo}
                        className="logo"
                    />

                </div>
            </div>
        </div>
    );
}