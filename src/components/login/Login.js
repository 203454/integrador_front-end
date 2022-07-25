import React from 'react'
import "../../bulma.css"
import "./login.css"
import axios from "axios";
import md5 from 'md5'

function Login() {

    const consumir_login = () => {
        var useData = {
            "email": document.getElementById('email').value,
            "password": document.getElementById('password').value
            // const respuesta = await fetch(`${Constantes.RUTA_API}/obtener_videojuego.php?id=${idVideojuego}`);

        }
        axios
            .get(`http://192.168.0.8/API/ver_usuario.php?email=${useData.email}`)
            .then((response) => {
                console.log(response.data[0])
                if (response.data[0].password === useData.password) {

                    localStorage.setItem('id',response.data[0].id)
                    localStorage.setItem('name',response.data[0].name)

                    window.location.href="/dashboard/home"
                }else{
                    console.log("contraseña incorrecta")
                    console.log(response.data[0])
                //   alert("Contraseña incorrecta")
                //   window.location.reload()
                }
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <div className='box' id='contenedor_login'>
             <div class="field">
                <label class="label">email</label>
                <div class="control">
                    <input class="input" id='email' type="text" placeholder="@email" />
                </div>
            </div>

            <div class="field">
                <label class="label">Contraseña</label>
                <div class="control">
                    <input class="input" id='password' type="password" placeholder="@password" />
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" onClick={consumir_login} id="botonlogin">Ver Usuarios</button>
                </div>


            </div>
        </div>
    )
}

export default Login
