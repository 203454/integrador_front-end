import React, { useState,useEffect } from 'react'
import Menu from '../menu/Menu'
import DatosAgrupados from './DatosAgrupados'
import DatosNoAgrupados from './DatosNoAgrupados'
import "../../bulma.css"
import "./estadistica.css"
import axios from "axios";
import Constantes from '../constantes/Constantes'




function Estadistica() {

    const [tipoDatos, setTipoDatos] = useState("");
    const [data, setData] = useState([]);
    var datos = []

    useEffect(() => {
        axios
            .get(`${Constantes.RUTA_API}/API/ver_humedadSuelo.php`)
            .then((response) => {
                console.log(response.data)
                setData(
                    response.data
                )
            })
            .catch((error) => {
                console.log(error.response.data)
            });
    }, [setData])

    for (let i = 0; i < data.length; i++) {
        datos.push(`${data[i].humedad_suelo}`);
    }
    
    
    // console.log("aqdsfdddddddd",datos.valueOf())
    datos = datos.map(x => parseInt(x));
    console.log(datos)
    // console.log("DATOS:",datos)


    // console.log("DATA:",data.length)
    return (
        <> <Menu />
            <div class='box' id='datosa'>

                <div class="select" id="selectsi">
                    <select onChange={(e) => {
                        const selectedType = e.target.value;
                        setTipoDatos(selectedType);
                    }}>
                        <option>click...</option>
                        <option>Datos agrupados</option>
                        <option>Datos no agrupados</option>
                    </select>
                </div>

                <div id="divuno2">

                    {
                        tipoDatos == "Datos agrupados" ?

                            <div id="divuno">
                                <DatosAgrupados datos={datos}></DatosAgrupados>
                            </div>

                            :

                            <div>

                            </div>
                    }
                </div>

                <div id="divdos">
                    {tipoDatos == "Datos no agrupados" ?
                        <div>
                            <DatosNoAgrupados datos={datos}></DatosNoAgrupados>
                        </div>

                        :

                        <div>

                        </div>
                    }

                </div>
            </div>
        </>

    )
}

export default Estadistica