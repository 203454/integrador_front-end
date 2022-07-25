// import React from 'react';

// class FilaDeTablaDeUsuarios extends React.Component {
//     constructor(props) {
      

//     }

//     render() {
       
//         return (
//             <div>
//                 <p>{props.username}</p>
//                 <p>{props.id}</p>
//             </div>
//         );
//     }
// }

// export default FilaDeTablaDeUsuarios;
import React from 'react'

function FilaDeTablaDeUsuarios(props) {
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.id}</p>
        </div>
    );
}

export default FilaDeTablaDeUsuarios;