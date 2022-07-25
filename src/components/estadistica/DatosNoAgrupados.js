import React, { useState } from "react"
function DatosNoAgrupados() {


    var datos = [
     
    ]


    const [dato, setDato] = useState()
    
    const handleAddNum = () => {
        console.log(dato);
        // datos = dato[0].split(",")
        datos = dato.split(",");
        datos = datos.map(x => parseInt(x));
       
        
    }

    console.log(dato)

    var clase = [

    ]

    function Presentar() {
        console.log(datos)
        var div = document.getElementById('info')
        div.innerHTML += `
        Datos NO Ordenados
        ${datos}
        </br>
        Datos Ordenados
        ${datos.sort(function (a, b) { return a - b })}
      `;
        var boton = document.getElementById('boton')
        boton.remove()
        ms();
    }

    function ms() {
        var media, mediana, moda;
        var acumulador = 0;
        for (let i = 0; i < datos.length; i++) {
            acumulador = acumulador + datos[i];
        }
        console.log(acumulador);
        media = acumulador / datos.length;
        var mitad = Math.floor(datos.length / 2);
        if (datos.length % 2 === 0) {
            mediana = (datos[mitad - 1] + datos[mitad]) / 2;
        } else {
            mediana = datos[mitad];
        }
        let contador = 0;
        let cuenta = 0;
        datos.map(p => {
            cuenta = 0
            datos.map(x => {
                if (p == x) { cuenta++ }
            })
            if (cuenta > contador) {
                contador = cuenta;
                moda = p;
            }
        });
        var div = document.getElementById('mmm')
        div.innerHTML += `
        <h4>media: ${media}</h4>
        <h4>mediana: ${mediana}</h4>
        <h4>moda: ${moda}</h4>
      `;

        medidasDispersion(media);
    }

    function medidasDispersion(media) {
        var dm, v, de;
        var sumatoria = 0
        for (let i = 0; i < datos.length; i++) {
            sumatoria = sumatoria + Math.abs(datos[i] - media)
        }
        dm = sumatoria / datos.length
        sumatoria = 0
        for (let j = 0; j < datos.length; j++) {
            sumatoria = sumatoria + Math.pow(datos[j] - media, 2)
        }
        v = sumatoria / datos.length
        de = Math.sqrt(v)
        var div = document.getElementById('dispersion')
        div.innerHTML += `
        <h4>Desviación Media: ${dm}</h4>
        <h4>Varianza: ${v}</h4>
        <h4>Desviación Estándar: ${de}</h4>
      `;
    }


    return (
        <section>
            <div>
                <input type="text" id="dataNum" onChange={event => setDato(event.target.value)}/>
                <button onClick={handleAddNum}> Agregar datos</button>
            </div>

            <div id='info'>
                <button id='boton' onClick={Presentar}>Mostrar Datos</button>
            </div>
            <div id='datos'>
                <div id='data'></div>
                <table id='tabla'></table>
            </div>
            <div id='mmm'>

            </div>
            <div id='dispersion'>

            </div>
        </section>
    );

}

export default DatosNoAgrupados;