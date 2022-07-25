import React, { useState, useEffect  } from "react";
import FilaDeTablaDeUsuarios from './FilaDeTablaDeUsuarios';
import axios from 'axios';
import Constantes from "../constantes/Constantes";

function VerUsuarios() {
    const [datosUsuarios, setDatosUsuarios] = useState([])

    useEffect( () => {
        axios
            .get(`${Constantes.RUTA_API}/ver_usuarios.php`)
            .then((response) => {

                setDatosUsuarios([
                    response.data
                ])

            })
            .catch((error) => {
                console.log(error.response.data)
            });
    }, [setDatosUsuarios])


    // console.log(datosUsuarios[0])
    return (
        <div>
            {
                datosUsuarios.map((usuario) =>{
                     return <FilaDeTablaDeUsuarios username={usuario.username} id={usuario.id}> </FilaDeTablaDeUsuarios>  
                })
            }
        </div>
    )
}

export default VerUsuarios