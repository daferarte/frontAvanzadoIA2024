import React from "react";
import { useForm } from "react-hook-form";


let SignIn = (props) => {
    let user = false;
    const {register, handleSubmit} = useForm();
    let onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            {
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="name" {...register("name")} placeholder="Nombre"/>
                    <input type="email" name="email" {...register("email")} placeholder="Correo electronico"/>
                    <input type="password" name="password" {...register("password")} placeholder="Contrasenia"/>
                    <input type="submit" value="Enviar" />
                </form>
            }
        </div>
    )
};

export default SignIn;