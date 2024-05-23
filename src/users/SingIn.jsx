import React from "react";


let SignIn = (props) => {
    let user = false;
    return (
        <div>
            {
                user ? 
                <button>Cerrar sesion</button>
                :
                <button>Ingresar</button>
            }
        </div>
    )
};

export default SignIn;