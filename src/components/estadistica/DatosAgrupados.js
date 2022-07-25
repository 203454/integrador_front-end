
import React, { useState } from "react"

function DatosAgrupados(props) {

    let {datos} = props


    // console.log(dato)
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
        tabla()

    }

    function tabla() {
        var k = 1 + 3.332 * Math.log10(datos.length);
        k = Math.round(k)
        var r = datos[datos.length - 1] - datos[0]
        var a = (r / k);
        a = Math.round(a) + 1
        var acumulado = 0
        for (let index = 0; index < k; index++) {
            var i = index + 1
            var limInf = datos[0] + (index * a)
            var limSup = datos[0] + (i * (a)) - 1
            var frec = 0
            for (let ind = 0; ind < datos.length; ind++) {
                if (datos[ind] >= limInf && datos[ind] <= limSup) {
                    frec = frec + 1
                }
            }
            var frecRel = frec / datos.length
            acumulado = acumulado + frec
            var mc = (limInf + limSup) / 2
            var frecCom = datos.length - frec
            clase.push({ limiteInferior: limInf, limiteSuperior: limSup, frecuencia: frec, frecuenciaRelativa: frecRel, frecuenciaAcumulada: acumulado, marcaClase: mc, frecuenciaComplementaria: frecCom })
        }
        if (clase.length > 1) {
            var uv = clase[1].limiteInferior - clase[0].limiteSuperior
            console.log(uv)

        }
        var tabla = document.getElementById('tabla')
        var table = document.createElement('thead')
        var div = document.getElementById('data')
        div.innerHTML += `
        <h4>K: ${k}</h4>
        <h4>R: ${r}</h4>
        <h4>A: ${a}</h4>
      `;
        table.innerHTML += `
            <tr>
                <th>Clase</th>
                <th>Limite Inferior</th>
                <th>Limite Superior 2</th>
                <th>Frecuencia</th>
                <th>Freccuencia Relativa</th>
                <th>Frecuencia Acumulada</th>
                <th>Marca de Clase</th>
                <th>Limite Inferior Exacto</th>
                <th>Limite Superior Exacto</th>
            </tr>
        `;
        tabla.appendChild(table)
        for (let index = 0; index < clase.length; index++) {
            var body = document.createElement('tbody')
            body.innerHTML += `
           <tr>
               <td>${index}</td>
               <td>${clase[index].limiteInferior}</td>
               <td>${clase[index].limiteSuperior}</td>
               <td>${clase[index].frecuencia}</td>
               <td>${clase[index].frecuenciaRelativa}</td>
               <td>${clase[index].frecuenciaAcumulada}</td>
               <td>${clase[index].frecuenciaComplementaria}</td>
               <td>${clase[index].marcaClase}</td>
               <td>${clase[index].limiteInferior - (uv / 2)}</td>
               <td>${clase[index].limiteSuperior + (uv / 2)}</td>
           </tr>
         `;
            tabla.appendChild(body)
        }
        ms()
    }

    function ms() {
        var uv = clase[1].limiteInferior - clase[0].limiteSuperior
        console.log(uv)
        var media, mediana, moda
        media = 0
        for (let index = 0; index < clase.length; index++) {
            media = media + (clase[index].frecuencia * clase[index].marcaClase)
        }
        media = media / datos.length
        var cm = (datos.length + 1) / 2
        var cl
        for (let index = 0; index < clase.length; index++) {
            if (clase[index].frecuenciaAcumulada >= cm) {
                cl = index
                index = clase.length + 1
            }
        }
        console.log(cl)
        var ancho = (clase[cl].limiteSuperior + (uv / 2)) - (clase[cl].limiteInferior - (uv / 2))
        console.log(ancho)
        mediana = (clase[cl].limiteInferior - (uv / 2)) + (((datos.length / 2) - clase[cl - 1].frecuenciaAcumulada) / clase[cl].frecuencia) * ancho
        console.log(mediana)
        ancho = clase[0].limiteSuperior - clase[0].limiteInferior
        var frecuencias = []
        for (let index = 0; index < clase.length; index++) {
            frecuencias.push(clase[index].frecuencia)
        }
        cm = Math.max.apply(null, frecuencias)
        for (let index = 0; index < clase.length; index++) {
            if (clase[index].frecuencia == cm) {
                cl = index
            }
        }
        moda = (clase[cl].limiteInferior - (uv / 2)) + (((clase[cl].frecuencia - clase[cl - 1].frecuencia - 1) / ((2 * clase[cl].frecuencia) - clase[cl - 1].frecuencia - clase[cl + 1].frecuencia)) * ancho)
        console.log(moda)
        var div = document.getElementById('mmm')
        div.innerHTML += `
        <h4>media: ${media}</h4>
        <h4>mediana: ${mediana}</h4>
        <h4>moda: ${moda}</h4>
      `;


        ////

        var v, de;
        var sumatoria = 0
        for (let j = 0; j < clase.length; j++) {
            sumatoria = sumatoria + (Math.pow(clase[j].marcaClase - media, 2) * clase[j].frecuencia)
        }
        v = sumatoria / datos.length
        de = Math.sqrt(v)
        var div = document.getElementById('dispersion')
        div.innerHTML += `
        <h4>Varianza: ${v}</h4>
        <h4>Desviación Estándar: ${de}</h4>
      `;
    }


    return (
        <section>
            {/* <div>
                <input type="text" id="dataNum" onChange={event => setDato(event.target.value)} />
                <button onClick={handleAddNum}> Agregar datos</button>
            </div> */}
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

export default DatosAgrupados;