import React, { useState, useEffect } from "react";
import axios from 'axios';
import Constantes from "../constantes/Constantes";
import "../../bulma.css"
import "./historialRiego.css"
import Menu from "../menu/Menu";

function HistorialRiego() {

    const [datosRiego, setDatosRiego] = useState([])

    useEffect(() => {
        axios
            .get(`${Constantes.RUTA_API}/API/ver_riegos.php`)
            .then((response) => {


                console.log(response.data)
                setDatosRiego(
                    response.data
                )
            })
            .catch((error) => {
                console.log(error.response.data)
            });
    }, [setDatosRiego])


    console.log(datosRiego)
    return (
        <>
        <Menu></Menu>
        <div id="contenedor_historial">
            
        
        <table class="table is-bordered" id="tabla_historial">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TEMPERATURA</th>
                        <th>HUMEDAD</th>
                        <th>HUMEDAD DEL SUELO</th>
                        <th>ESTADO DEL AGUA</th>
                    </tr>
                </thead>
                <tbody>
                    {datosRiego.map(elemento => (
                        <tr key={elemento.id_riego} value={elemento.id_riego}>
                            <td>   {elemento.id_riego}</td>
                            <td>   {elemento.temperatura}</td>
                            <td>   {elemento.humedad}</td>
                            <td>   {elemento.humedad_suelo}</td>
                            <td>   {elemento.estado_agua}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
        </>
    )
}

export default HistorialRiego